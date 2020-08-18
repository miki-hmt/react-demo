
//###### 第一步：引入react库
import React from 'react'

//##### 第二步 用类的形式创建组件Hook形式
class Home extends React.Component{
    //渲染函数，页面要显示的内容
    render(){
        return (
            //如果存在标签结构，并且标签结构需要换行，需要使用()括号括起来 2020.07.16 miki
            <div>
                <h1>demo2-1</h1>
                <h2>hello small bitch, 学习react最重要的是心态要好！！！</h2>
            </div>
        );
    }
}

//其他地方如果要引用该文件，需要导出  2020.07.16 miki
export default Home