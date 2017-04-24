import userService from 'SERVICE/userService'

// ================================
// Action Creator
//这些都是生成action的方法 当调用mapDispatchToProps的时候可以直接{onClick:login()} 会返回一个dispatch派发reduce的函数
// ================================
const loginDone = (userData) => ({
  type: LOG_IN,
  payload: userData
})

const login = (formData) => {
  return dispatch => {
    userService
      .login(formData)
      .then(
        re => dispatch(loginDone(re))
      )
  }
}

const checkLogin = () => {
  return dispatch => {
    userService
      .checkLogin()
      .then((re) => {
        if (!re) return
        dispatch(loginDone(re))
      })
  }
}

const logout = () => {
  return dispatch => {
    userService
      .logout()
      .then(() => 
        dispatch({
          type: LOG_OUT
        })
      )
  }
}
/* default 默认导出所有 Actions Creator */
export default {
  login, checkLogin, logout
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
//根据不同的action.type进行不同的逻辑操作  这里就是reducer的操作  键与action.type对应 发送什么action就会得到不同的reducer
// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const ACTION_HANDLERS = {
  [LOG_IN]: (userData, { payload }) => payload, // payload is userData
  [LOG_OUT]: () => null
}
