// 存储入kou

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'
import axios from 'axios'
const clientAxios = axios.create({
      baseURL: '/'
})
const serverAxios = axios.create({
      baseURL: 'http://localhost:9033/api'
})
const reducer = combineReducers({
      index: indexReducer,
      user: userReducer

})

// const store = createStore(reducer, applyMiddleware(thunk))

export const getServerStore = () => {
      return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {
      const defaultState = window._context ? window._context : {}
      return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}