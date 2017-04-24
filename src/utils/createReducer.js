/**
 * @param  {initState}
 * @param  {Object} handlers
 * @return {Reducer}
 */
export default function createReducer(initState, handlers) {
    return function reducer(state = initState, action) {
        const handler = handlers[action.type]
        return handler ? handler(state, action) : state
    }
}
//返回一个默认的reducer state默认为传入进来的initState,操作为 对应传入进来的action的type user模块的操作
// 如果user模块有这个操作就执行该操作并返回值  如果没有 表示action的type并不是我在user模块中定义的操作 即直接返回state不做处理
