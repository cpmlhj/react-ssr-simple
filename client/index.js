import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import App from '../App'
// 注水
const Page =
      (<Provider store={store}>
            <BrowserRouter>{App}</BrowserRouter>
      </Provider>)

ReactDom.hydrate(Page, document.getElementById('root'))