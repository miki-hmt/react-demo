
import React from 'react'


export default class StateComp extends React.Component{
    /**
     * 组件的中的状态：tate
     * 以前我们操作页面元素的变化，都是修改DOM，操作DOOM
     * 但是有了react优秀的框架，我们不再推荐修改DOM，页面元素的改变使用state进行处理
     * @returns {*}
     */
    constructor(props){
        super(props);

        //自定义属性
        this.state = {
            count: 10,
            flag: true
        }
    }

    //自增1的函数
    increment() {
        this.setState({
            count:this.state.count+=1
        })
    }

    //自减1的函数
    decrement() {
        this.setState({
            count:this.state.count-=1
        })
    }

    clickHndler =() =>{
        console.log(this.state.count)
    }

    replyHandler =() =>{
        this.setState({
            flag: this.state.flag ? false : true
        })
    }

    render() {

        let showView = this.state.flag ? '我是你爹' : '你爹是我';
        return (
            <div>
                <h1>demo4</h1>
                <h3>组件的state</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.decrement.bind(this)}>减少</button>
                <button onClick={this.clickHndler}>关于this</button>
                <p>{showView}</p>
                <button onClick={this.replyHandler}>回应</button>
            </div>
        )
    }
}