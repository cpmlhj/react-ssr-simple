import React from 'react'
import ReactDom from 'react-dom'

import App from '../App'
// 注水
ReactDom.hydrate(App, document.getElementById('root'))