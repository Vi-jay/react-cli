import { connect } from 'react-redux'

/**
 * 将木偶组件变成智能组件
 * @param  {Function} mapStateToProps
 * @param  {Object}   mapActionCreators
 * @param  {Component?}
 * @return {Connect : Container}
 */
//用connect使组件订阅store 并且赋予一些action操作 使之可以与数据中间发送action  订阅了store后 如果store发生改变 订阅的组件也会更新state并渲染
//渲染时会判断state是否发生改变如果state为发生改变 则不会重新渲染
export default function createContainer(mapStateToProps, mapActionCreators, component) {
  const connectComponent = connect(mapStateToProps, mapActionCreators)
  return component ? connectComponent(component) : connectComponent
}
