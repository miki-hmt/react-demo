
import React from 'react'

export default class ComponentLife extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return true;    //返回false不能进行修改  2020.07.24
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeHandler =() =>{
        this.setState({
            count: this.state.count+=1
        })
    }

    //子传父方法定义   2020.08.06 miki
    sonClickChange =() =>{
        this.props.clickChanges('我的狗子');    //clickChanges为父组件中子组件的key ------> <ComponentLife title={this.state.title} clickChanges={ this.clickChangeSon }/>  2020.08.06 miki
    }

    //渲染函数
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>demo5</h1>
                生命周期函数:{count} --{this.props.title}
                <button onClick={this.changeHandler}>修改</button>&nbsp;
                <button onClick={this.sonClickChange}>【子传父】修改title</button>   {/*子传父，方便添加动态参，数数据回传 #2 2020.07.24 miki*/}
            </div>
        )

    }
}