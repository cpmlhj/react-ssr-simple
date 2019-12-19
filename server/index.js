import React from 'react'
import { renderToString } from 'react-dom/server'
import routes from '../App'
import express from 'express'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import proxy from 'http-proxy-middleware'
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
      console.log(req.path)
      if (req.path === '/favicon.ico') return
      // 把react组件解析成HTML
      const promise = []
      let content = ''
      routes.some(route => {
            const match = matchPath(req.path, route)
            if (match) {
                  const { loadData } = route
                  if (loadData) {
                        const promises = new Promise((resolve, reject) => {
                              loadData(store).then(resolve).catch(resolve)
                        })
                        promise.push(promises)
                  }
            }
      })
      // console.log(Promise.allSettled([]))
      // promise.map(p => p.catch((e) => { return e }))
      Promise.all(promise).then(e => {
            const context = {}
            console.log(context)
            content = renderToString(
                  <Provider store={store}>
                        <StaticRouter localtion={req.url} context={context}>
                              <Headers />
                              <Switch>
                                    {
                                          routes.map(r => <Route {...r}></Route>)
                                    }
                              </Switch>
                        </StaticRouter>

                  </Provider>
            )
            console.log(context)
            if (context.statuscode) {
                  res.status(context.statuscode)
            }
            if(context.action == 'REPLACE') {
                  res.redirect(301, context.url)
            }
      }).finally(() => {
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