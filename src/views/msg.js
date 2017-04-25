/**
 * Created by Administrator on 2017/4/24.
 */
import React, {Component} from 'react'


export default class msg extends Component {

    componentDidMount() {
        console.log("我被加载了")
    }

    render() {
        return (<div>
                <h1>哈哈</h1>
            </div>
        )
    }

}
//default表示 import时默认为该对象  如果export const xxx 表示 import时需要声明导入的是哪个 import {aa} form "./aa" 导入了 到处的那个aa变量
