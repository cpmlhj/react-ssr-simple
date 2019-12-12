
const express = require('express')

const app = express()
app.get('/api/course/list', (req, res) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Method', '*')
      res.header('Content-Type', "application/json;charset=utf-8")
      res.json({
            code: 1,
            list: [
                  {name: 'web', id: 1},
                  {name: 'web2', id: 2},
                  {name: 'web3', id: 3},
                  {name: 'web4', id: 4}
            ]
      })
})

app.listen(9004, () => {
      console.log('start')
})