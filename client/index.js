import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store/store'
import routes from '../App'
import Headers from '../component/header'
// 注水
const Page =
      (<Provider store={getClientStore()}>

            <BrowserRouter>
                  <Headers></Headers>
                  {
                        routes.map(r => <Route {...r}></Route>)
                  }

            </BrowserRouter>

      </Provider>)

ReactDom.hydrate(Page, document.getElementById('root'))