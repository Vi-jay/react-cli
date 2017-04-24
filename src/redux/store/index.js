import { applyMiddleware, compose, createStore } from 'redux'
//创建 reducer函数
import { createRootReducer } from 'REDUCER'
//中间件 暂时不懂
import middlewares from './middlewares'
import enhancers from './enhancers'
import syncHistoryWithStore from './syncHistoryWithStore'

// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  createRootReducer(),
  window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)
export default store

// ======================================================
// 增强版 history
// ======================================================
export const history = syncHistoryWithStore(store)
