import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'
function Index(props) {
      const [num, setNum] = useState(1)
      useEffect(() => {
            console.log(props.list)
            if (!props.list.length) {
                  props.getIndexList()
            }
      }, [])
      return <div>
            <h1>开课吧 {num}</h1>
            <button onClick={() => setNum(num + 1)}>++我啊</button>
            <hr />
            <ul>
                  {
                        props.list.map(i => {
                              return <li key={i.id}>{i.name}</li>
                        })
                  }
            </ul>
      </div>
}
Index.loadData = (store) => {
      return store.dispatch(getIndexList())
}
export default connect(state => {
      return state.index
}, { getIndexList })(Index)
