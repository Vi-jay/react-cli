import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/user'
import initState from 'STORE/initState'
//导出创建默认的reducer 通过createReducer 把默认的userData 和action操作创建成一个reducer
export default createReducer(initState.userData, ACTION_HANDLERS)
//返回的就是一个reducer(userData,action){doSomeThing....}