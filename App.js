import React, { useState } from 'react'

function App() {
      const [num, setNum] = useState(1)
      return <div>
            <h1>开课吧 {num}</h1>
            <button onClick={() => setNum(num+1)}>++我啊</button>
      </div>
}

export default <App title='开个吧'></App>