import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'
import styles from './index.css'
import withStyle from '../withStyle'
function Index(props) {
      // if(props.staticContenxt) {
      //       props.staticContenxt.css.push(styles._getCss())
      // }
      const [num, setNum] = useState(1)
      useEffect(() => {
            if (!props.list.length) {
                  props.getIndexList()
            }
      }, [])
      return <div className={styles.container}>
            <h1 className={styles.title}>开课吧 {num}</h1>
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
}, { getIndexList })(withStyle(Index, styles))
