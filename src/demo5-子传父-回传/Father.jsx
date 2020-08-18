
import React from 'react'
import Child from './Child'

export default class Father extends React.Component{

    constructor(){
        super();
        this.state ={
            email: ''
        }
    }

    handleEmail =(data) =>{
        this.setState({
            email: data.target.value    //获取input表单值的方法  2020.08.06 miki
        })
    }

    render() {
        return(
            <div>
                <h1>demo5-1</h1>
                <h3>【子传父】组件的回传</h3>
                <div>用户邮箱：{this.state.email}</div>
                <Child name="email" defaultValue={this.state.email} handle={this.handleEmail}/>
            </div>
        )
    }
}