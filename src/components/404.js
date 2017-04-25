import React, { Component } from 'react'

export default class NotFound extends Component {
  static contextTypes = {   //static定义的是静态属性 表示这个class.xxx 就相当于在原型上定义属性 而不是实例上
    router: React.PropTypes.object.isRequired//暂时不知道是干什么的
  }

  componentWillMount() {
    alert('404 NOT FOUND');
    this.context.router.replace('/')
  }

  render () {
    // 非实体组件需显式返回 null
    return null
  }
}
