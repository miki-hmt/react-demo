
import React from 'react'

//######## demo3 #1 组件导航的复用性
export default class MyNav extends React.Component {
    render() {

        console.log(this.props.nav);
        return (
            <div>
                <h1>demo3-{this.props.chapter}</h1>
                <h3>{this.props.title}</h3>
                <ul>
                    {/* 2020.07.16 Miki 必须以这种尖括号加 {/*....的方式添加注释，否则会不生效

                        旧代码：  <li>首页</li>
                        <li>学习</li>
                        <li>视频</li>

                        //demo3 #4 {}按照js解析
                    */}
                    {
                        this.props.nav.map((element, index) =>{
                            return <li key={index}>{element} </li>
                    })
                    }
                </ul>
            </div>
        )
    }
}