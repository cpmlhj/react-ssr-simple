import React from 'react'
import { renderToString } from 'react-dom/server'
import routes from '../App'
import express from 'express'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import proxy  from 'http-proxy-middleware'
import { getServerStore } from '../store/store'
import Headers from '../component/header'
const app = express()
const store = getServerStore()
const proxyTable = {
      '/api/**': {
            target: 'http://127.0.0.1:9004',
            changeOrigin: true
      }
}
Object.keys(proxyTable).forEach(k => app.use(proxy(k, proxyTable[k])))
app.use(express.static('public'))
app.get('*', (req, res) => {
      // 把react组件解析成HTML
      const promise = []

      routes.some(route => {
            const match = matchPath(req.path, route)
            if (match) {
                  const { loadData } = route
                  if (loadData) promise.push(loadData(store))
            }
      })
      // console.log(Promise.allSettled([]))
      Promise.all(promise).then(e => {
            //
      }).catch((e) => {
           throw Error(e)
      }).finally(() => {
            const content = renderToString(
                  <Provider store={store}>

                        <StaticRouter localtion={req.url}>
                              <Headers />
                              {
                                    routes.map(r => <Route {...r}></Route>)
                              }
                        </StaticRouter>

                  </Provider>
            )
            res.send(`
                <html>
                   <head>
                      <meta charset='utf-8' />
                      <title>reacr ssr</title>
                   </head>
                   <body>
                       <div id='root'>${content}</div>
                       <script>
                       window._context = ${JSON.stringify(store.getState())}
                       </script>
                       <script src="bundle.js"></script>
                   </body>
                </html>
            `)
      })
})
app.listen(9033)