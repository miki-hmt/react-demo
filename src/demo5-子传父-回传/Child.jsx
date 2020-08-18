
import React from 'react'

export default class Child extends React.Component{

    render() {
        return(
            <div>
                {/* handle为父组件中子组件的key --->  <Child name="email" defaultValue={this.state.email} handle={this.handleEmail}/>  2020.08.06 miki*/}
                请输入邮箱：<input onChange={this.props.handle}/>
            </div>
        )
    }
}