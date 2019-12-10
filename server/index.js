import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../App'
import express from 'express'

const app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
      // 把react组件解析成HTML
      const content = renderToString(App)
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