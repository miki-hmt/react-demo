
import React from 'react'

export default class IfDemo extends React.Component{

    constructor(){
        super();
        this.state = {
            isLogin: false,
            names: []   //'miki','黄黄'
        }
    }

    clickHandler =() =>{
        this.setState({
            isLogin: true
        })
    }

    logoutHandler =() =>{
        this.setState({
            isLogin: false
        })
    }

    render() {
        const {names} = this.state;
        let showView = this.state.isLogin ?
            <div>miki</div> :
            <div>请登录</div>

        return(
            <div>
                <h1>demo7-条件渲染</h1>
                条件渲染：{showView}
                <button onClick={this.clickHandler}>登录</button>
                <button onClick={this.logoutHandler}>登出</button>

                {
                    names.length > 0 ?
                        <div>
                            {
                                names.map((element, index) =>{
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div> :
                        <div>请求数据中，请等待...</div>
                }
            </div>
        )
    }
}