
import React from 'react'

export default class SetStateDemo extends React.Component{

    constructor(){
        super();
        this.state ={
            count: 0
        }
    }

    incrementAsync =() =>{
        this.setState({
            count: this.state.count +1
        })
        console.log("异步修改值，两边未同步【"+this.state.count);
    }


    async increment(){
        await this.setStateAsync({
            count: this.state.count+1
        })
        console.log("同步修改值，两边同步【"+ this.state.count);
    }

    setStateAsync(state){
        return new Promise((resolve) =>{
            this.setState(state, resolve);
        })
    }

    render() {
        return(
            <div>
                <h1>demo6-- setState同步异步问题--(请打开f12看控制台数据变化)</h1>
                <p>{this.state.count }</p>
                <button onClick={this.incrementAsync}>异步修改</button>
                <button onClick={this.increment.bind(this)}>同步修改</button>
            </div>
        )
    }
}