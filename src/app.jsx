
//###### 第一步：引入react库
import React from 'react'

//demo2-1 在app.js中实现Home.js的引用和效果渲染 <Home/>
import Home from './demo2/Home'

//demo3 #2 组件导航的复用性
import MyNav from './demo3/MyNav'

//demo4 #1 state状态管理
import StateComp from './demo4/StateComp'

//demo5 #1 react生命周期管理
import ComponentLife from './demo5/ComponentLife'
import Father from "./demo5-子传父-回传/Father";

//demo6 #1 setState是同步还是异步问题
import SetStateDemo from  "./demo6-setState/setStateDemo"

//demo7 #1 React条件渲染
import IfDemo from './demo7-if/ifDemo'

//demo8 #1 React列表渲染
import KeyDemo from "./demo8-keyIndex/keyDemo";

//demo9 #1 React表单受控组件
import FormDemo from "./demo9-form/formDemo";

//demo10 #1 React 非受控组件
import RefsAndDOM from './demo10-refs&DOM/RefsAndDOM';

//demo11 #1 React 非受控组件 -- refs操作表单
import RefsForm from './demo11-RefsForm/refsForm'

//demo12 #1 组合vs继承
import Compose from './demo12-组合vs继承/compose'

//demo13 #1 propsType类型检查
import PropsTypeDemo from './demo13-propsType类型检查/PropsTypeDemo'
//##### 第二步 用类的形式创建组件Hook形式
class App extends React.Component{

    //子传父，数据回传 #1 2020.07.24 miki
    constructor(){
        super();
        this.state = {
            title: '文本一'
        }

    }

    clickChange =() =>{
        this.setState({
            title: '文本二'
        })
    }

    clickChangeSon = (data) =>{
        this.setState({
            title: data
        })
    }

    //渲染函数，页面要显示的内容
    render(){

        //demo3 #3 组件导航的复用性
        const nav1 = ['首页','学习','视频'];
        const nav2 = ['WEB','JAVA','NODE'];

        return (
            //如果存在标签结构，并且标签结构需要换行，需要使用()括号括起来 2020.07.16 miki
            <div>
                <h1>demo2</h1>
                <h2>hello React component, small bitch</h2>

                <Home/>

                {/* demo3 #4 组件导航的复用性 */}
                <MyNav nav ={nav1} title={'路径导航'} chapter={'1'} />
                <MyNav nav ={nav2} title={'学习导航'} chapter={'2'} />

                {/*demo4 #2 state状态管理*/}
                <StateComp/>

                {/*demo5 #2 react的生命周期函数*/}
                <ComponentLife title={this.state.title} clickChanges={ this.clickChangeSon }/>   {/*子传父，数据回传 #2 2020.08.06 miki*/}
                <button onClick={this.clickChange}>【父传子】修改title</button>                        {/*父传子，数据回传 #2 2020.07.24 miki*/}

                {/*demo5 #3 子传父示例*/}
                <Father/>

                {/*demo6 #2 setState同步异步问题*/}
                <SetStateDemo/>

                {/*demo7 #2 React条件渲染*/}
                <IfDemo/>

                {/*demo8 #2 React列表渲染渲染*/}
                <KeyDemo/>

                {/*demo9 #2 React表单受控组件*/}
                <FormDemo/>

                {/*demo10 #2 React非受控组件*/}
                <RefsAndDOM/>

                {/*demo11 #2 React非受控组件操作*/}
                <RefsForm/>

                {/*demo12 #2 React组合vs继承*/}
                <Compose>
                    <div>我是组合效果</div>
                </Compose>

                {/*demo13 #2 PropsType类型检查- 检查title*/}
                <PropsTypeDemo title={'这是标题'}/>
            </div>
        );
    }
}

//其他地方如果要引用该文件，需要导出  2020.07.16 miki
export default App