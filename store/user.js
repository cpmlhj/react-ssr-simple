//首页
import request from '../request'
const GET_LIST = 'INDEX/GET_USER_INFO'
const changeList = data => ({
      type: GET_LIST,
      data
})

export const getUserInfo = server => {
      return (dispatch, getState, axiosInstance) => {
            return request.get('user/info')
                  .then(res => {
                        const { data } = res.data
                        dispatch(changeList(data))
                  })
      }
}
const defaultState = {
      userInfo: {}
}
export default (state = defaultState, action) => {
      switch (action.type) {
            case GET_LIST:
              
                  const newState = {
                        ...state,
                        userInfo: action.data
                  }
                  return newState
                  default:
                        return state
      }
}