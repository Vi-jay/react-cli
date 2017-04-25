import React, {Component} from 'react'
import {Link} from 'react-router'
/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */
class Welcome extends Component {
    //static定义的是静态属性 表示这个class.xxx 就相当于在原型上定义属性 而不是实例上
    static contextTypes = {
        router: React.PropTypes.object
        //ask for `router` from context 把路由对象绑定到当前上下文
    };
    //这种声明方式是属性 给当前对象中声明了一个这个属性
    pushAddr = () => {
        this.context.router.push("msg")
    };
    //于是可以在下面直接使用上面方法 不然要在constructor中将这个函数绑定当前执行对象上然后在绑定到当前执行对象的属性上
    render() {
        return <div className="jumbotron">
            <h1 onClick={this.pushAddr}>欢迎使用 <br/> React Demo</h1>
            <p>
                <Link
                    to="/msg"
                    role="button"
                    className="btn btn-success btn-lg">
                    前往留言板 &gt;
                </Link>
                &nbsp;
                <Link
                    to="/todo"
                    role="button"
                    className="btn btn-success btn-lg">
                    前往待办事项(新功能) &gt;
                </Link>
            </p>
        </div>
    }
}


export default Welcome
