import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../App'
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
const app = express()
app.use(express.static('public'))
app.get('*', (req, res) => {
      // 把react组件解析成HTML
      const content = renderToString(
            <Provider store={store}>
                  <StaticRouter localtion={req.url}>
                        {App}
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
                 <script src="bundle.js"></script>
             </body>
          </html>
      `)
})
app.listen(9033)