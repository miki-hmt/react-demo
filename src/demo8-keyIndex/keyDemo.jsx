
import React from 'react'

export default class KeyDemo extends React.Component{

    constructor(){
        super();
        this.state ={
            userinfo:[
                {
                    name: 'miki',
                    age: 26,
                    sex: '男',
                    hobby: ['兵乓', '游戏']
                },
                {
                    name: '黄黄',
                    age: 26,
                    sex: 'nv',
                    hobby: ['宅', '小说']
                }
            ]
        }
    }

    //向数组中追加数据  2020.08.07 miki
    addUserHandle =() =>{
        this.setState({
            userinfo: this.state.userinfo.concat([
                {
                    name: '二狗',
                    age: 26,
                    sex: '女',
                    hobby: ['兵乓', '游戏']
                }
            ])
        })
    }

    render() {
        return(
            <div>
                <h1>demo8 遍历keyIndex</h1>
                <ul>
                    {
                        this.state.userinfo.map((element, index) =>{
                            return(
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.hobby.map((hobbyelement, keyindex) =>{
                                                return <span key={keyindex}>{hobbyelement}</span>
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <button onClick={this.addUserHandle}>添加信息</button>
            </div>
        )
    }
}