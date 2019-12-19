import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import { Redirect } from 'react-router-dom'
function User(props) {
      return <Redirect to='/about'></Redirect>
}
User.loadData = (store) => {
      return store.dispatch(getUserInfo())
}
export default connect(state => {
      return state.user
})(User)