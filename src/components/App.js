import React from 'react'
import Navbar from 'COMPONENT/Navbar/'

let DevTools;
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => //把props解构了 当路由发生变化时 children也会发生变化
  <div>
    <Navbar location={location} />
  
    <div className="container">
      {/* 相当于 Vue Demo 中的根 router-view */}
      { children }
    </div>

    { DevTools && <DevTools /> }
  </div>

export default App
