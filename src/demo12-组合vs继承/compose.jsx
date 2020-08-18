import React from "react"

export default class Compose extends React.Component{
    render(){
        return(
            <div>
                <h1>demo12 - 组合vs继承</h1>
                哈哈哈:{ this.props.children }
            </div>
        )
    }
}