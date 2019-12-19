import React from 'react'
import { Route } from 'react-router-dom'

function Status({code, children}) {
      return <Route render={({staticContext}) => {
            if (staticContext) {
                  staticContext.statuscode = code
            }
            return children
      }}></Route>
}

function NotFound(props) {
      console.log(props)
      return <Status code={404}>
            <h1>哎呦</h1>
            <img id='img-404' src={'./01.jpg'}></img>
      </Status>
}

export default NotFound