export default {
  path: '/',
  component: require('COMPONENT/App').default,//“/”默认调用app组件
  indexRoute: {                               //默认welcome组件为app的this.props.children
    component: require('COMPONENT/Welcome').default
  },
  //app组件下的路由组件 切换路由即切换app的this.props.children
  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    require('./msg').default,
    require('./todo').default,
    
    // 强制“刷新”页面的 hack
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
