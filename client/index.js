import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store/store'
import routes from '../App'
import Headers from '../component/header'
// 注水
const Page =
      (<Provider store={getClientStore()}>

            <BrowserRouter>
                  <Headers></Headers>
                  <Switch>
                        {
                              routes.map(r => <Route {...r}></Route>)
                        }
                  </Switch>
            </BrowserRouter>

      </Provider>)

ReactDom.hydrate(Page, document.getElementById('root'))