import React from 'react'
function withStyle(Comp, Styles) {
      return function (props) {
            if (props.staticContenxt) {
                  props.staticContenxt.css.push(Styles._getCss())
            }
            return <Comp {...props} />
      }
}

export default withStyle