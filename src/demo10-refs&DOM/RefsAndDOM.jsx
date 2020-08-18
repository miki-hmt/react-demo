
import React from 'react'

//demo10 操作DOM
export default class RefsAndDOM extends React.Component{

    constructor(){
        super();
        this.HelloDiv = React.createRef();
    }

    componentDidMount(){
        this.HelloDiv.current.style.color = "red";
    }

    render(){
        return(
            <div>
                <h1>demo10 -受控组件操作-ref操作DOM</h1>
                Refs和DOM
                <div ref={ this.HelloDiv }>
                    Hello
                </div>
            </div>
        )
    }
}