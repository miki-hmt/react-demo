import React from "react"

export default class refsForm extends React.Component{

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    clickHandler = (e) =>{
        console.log(this.username.current.value);
        console.log(this.password.current.value);
    }

    render(){
        return(
            <div>
                <h1>demo11 非受控组件-refs操作dom表单</h1>
                <input type="text" ref={ this.username }/>
                <input type="text" ref={ this.password }/>
                <button onClick={ this.clickHandler }>提交</button>
            </div>
        )
    }
}