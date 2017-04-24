export default {
  path: '/',
  component: require('COMPONENT/App').default,//“/”默认调用app组件
  indexRoute: {                               //默认welcome组件为app的this.props.children
    component: require('COMPONENT/Welcome').default
  },
  //app组件下的路由组件 切换路由即切换app的this.props.children
  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    // 强制“刷新”页面的 hack
      { path: 'msg', getComponent(nextState,cb){
        //按需加载核心 第一个是依赖的模块 第二个是一个异步函数 会传入一个require参数进去 可以让我们进行加载文件
          //即 当getComponent调用时就会加载该模块 执行回调函数 返回给视图
          require.ensure([],require=>{cb(null,require('COMPONENT/msg').default)},'msgView')
      } },


      { path: 'redirect', component: require('COMPONENT/Redirect').default },

    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
      { path: '*', component: require('COMPONENT/404').default }
  ]
}

/*
  当前路由树如下
  ├ /
  |
  ├ /msg
  ├ /msg/add
  ├ /msg/detail/:msgId
  ├ /msg/modify/:msgId
  |
  ├ /todo
  |
  ├ /redirect
*/
