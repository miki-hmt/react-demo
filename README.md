
## 前期的知识准备工作
1.Javascript

2.HTML + CSS

3.构建工具
 webpack
 
4.安装node,npm

5.cnpm命令

6.官方文档 https://zh-hans.reactjs.org/docs/create-a-new-react-app.html
https://zh-hans.reactjs.org/docs/getting-started.html

## 创建react项目
 	npx create-react-app 项目名
 	cd 项目名
 	npm start

## 环境介绍【项目文件结构】

 	node_modules : 文件非常大
 	public : 资源入口文件
 	src：源码文件
 	package.json : 资源配置文件
### props和state的区别
	props：
　　props是一个从外部传进组件的参数，由于React具有单向数据流的特性，所以他的主要作用是从父组件向子组件中传递数据，它是不可改变的，如果想要改变它，只能通过外部组件传入新的props来重新渲染子组件，否则子组件的props和展示形式不会改变，props除了可以传字符串，数字，还可以传递对象，数组甚至是回调函数

    state：
　　state主要作用是用于组件保存，控制及修改自己的状态，它只能在constructor中初始化，state是可以被改变的，state放改动的一些属性，比如点击选中，再点击取消，类似这种属性就放入带state中，注意：没有state的叫做无状态组件，多用props少用state，多写无状态组件，注意：修改state的值时，必须通过调用setState方法，当我们调用this.setState方法时,React会更新组件的数据状态，并且重新调用render方法

### let和const的区别
	let与const都是只在声明所在的块级作用域内有效。
	let声明的变量可以改变，值和类型都可以改变，没有限制。
	const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

## react基础知识
	基础参数：
	const react = 'hello small batch';
	ReactDOM.render(<h1>{react}</h1>, document.getElementById('root'));
	//react 渲染函数-- ReactDOM.render(,)
	//document.getElementById("root")   对应/public/index.html中的<div id="root"></div> 根节点div容器
### jsx语法：
	javascript + xml语法(html)
<font face="微软雅黑" size=3 color=#FF0000 >解毒jsx语法：遇到 <> 按照html解析，遇到 { } 按照javascript解析 </font>

### 元素渲染
	//demo1
	const react = 'hello small batch';
	ReactDOM.render(<h1>{react}</h1>, document.getElementById('root'));
	
	
	//demo2
	//如果存在标签结构，并且标签结构需要换行，需要使用()括号括起来
	function tick() {
	    const element = (
	        <div>
	            <h1>Demo1</h1>
	            <h2> Hello, small batch! It is {new Date().toLocaleTimeString()}</h2>
	        </div>
	    );
	    //渲染函数
	    ReactDOM.render(element, document.getElementById('demo1'));
	}
	//一秒刷新一下时间
	setInterval(tick, 1000);

### 组件
	组件的后缀可以是.js 也可以是.jsx, jsx会有react语法提示
	一个react项目是由成千上万个组件组成

	1. Input表单要想值可变，需要使用defaultValue="" 而不是Value=""

### props属性
	组件的复用性很重要
<font face="微软雅黑" size=3 color=#FF0000 >！！poros属性在使用的地方不可被修改</font>

### react添加注释的方法
	import React from 'react'

	//######## demo3 #1 组件导航的复用性
	export default class MyNav extends React.Component {
	    render() {
	
	        console.log(this.props.nav);
	        return (
	            <div>
	                <h1>demo3</h1>
	                <ul>
	                    {/* 2020.07.16 Miki 必须以这种尖括号加 {/*....的方式添加注释，否则会不生效
	
	                        旧代码：  <li>首页</li>
	                        <li>学习</li>
	                        <li>视频</li>
	
	                        //demo3 #4 {}按照js解析
	                    */}
	                    {
	                        this.props.nav.map((element, index) =>{
	                            return <li key={index}>{element} </li>
	                    })
	                    }
	                </ul>
	            </div>
	        )
	    }
	}

### react 组件State

### react生命周期函数（钩子函数也属于生命周期函数的一部分）
	随着对react理解加深，生命周期的参考价值越来越重要。
	函数列表：
	ComponentWillMount：在组件渲染之前执行

	ComponentDidMount：在组件渲染之后执行，组件此时已经处于运行状态

	ShouldComponentUpdate：返回true或false，true表示允许改变，false表示不允许改变

	ComponentWillUpdate：数据在改变之前执行（state,props）

	ComponentDidUpdate：数据在修改完成之后（state，props）
	
	ComponentWillReveiceProps：props发生改变执行
	
	componentWillUnmount：在组件卸载前执行
![](http://images.sharehoo.cn/react%E5%87%BD%E6%95%B0%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.jpg)

图二
![](http://images.sharehoo.cn/20190606101223243.png)
	
#### 父传子，子传父
	修改props：涉及到子传父，回传的概念，这里即是子级组件发生改变，回传消息给父级更新。
	工作或者面试中经常遇到这样的问题，“子组件如何向父组件传值？”。其实很简单，概括起来就是：react中state改变了，组件才会update。父写好state和处理该state的函数，
	同时将函数名通过props属性值的形式传入子，子调用父的函数，同时引起state变化。

##### 子传父创建流程	
	1. 在父组件中定义构造方法，定义要回传的字段或属性
	2. 在父级中定义该字段成动态可变	  --<div>用户邮箱：{this.state.email}</div>
	3. 定义子组件取值的key【handle】 --<Child name="email" defaultValue={this.state.email} handle={this.handleEmail}/>
	4. 在父组件中创建子组件要调用父组件的方法 --handleEmail =(data) =>{...}
	5. 在子组件中调用父组件的方法，并传值
	
####### Father
	export default class Father extends React.Component{

	    constructor(){
	        super();
	        this.state ={
	            email: ''
	        }
	    }
	
	    handleEmail =(data) =>{
	        this.setState({
	            email: data.target.value    //获取input表单值的方法  2020.08.06 miki
	        })
	    }
	
	    render() {
	        return(
	            <div>
	                <h1>demo5-1</h1>
	                <h3>组件的回传</h3>
	                <div>用户邮箱：{this.state.email}</div>
	                <Child name="email" defaultValue={this.state.email} handle={this.handleEmail}/>
	            </div>
	        )
	    }
	}

####### Son
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

### setState 更新是同步还是异步
1. setState会引起试图的重绘
2. 在可控的情况下是异步，在非可控的情况下是同步

### React条件渲染
	React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。

### React列表渲染&key
	key的作用：
	遍历数据得时候，如果不添加key，会导致整个数据部分都重新渲染，增加内存消耗
	添加key之后，只渲染新增得数据部分

### react表单受控组件
	分为受控组件和非受控组件
####1.受控组件
	https://zh-hans.reactjs.org/docs/forms.html
	在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）通常自己维护 state，并根据用户输入进行更新。
	而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
####2.非受控组件
	在大多数情况下，我们推荐使用 受控组件 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。
	要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 使用 ref 来从 DOM 节点中获取表单数据。
	https://zh-hans.reactjs.org/docs/uncontrolled-components.html
####3.表单多元素输入处理
	处理多个输入
	当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。

### 组合vs继承
	React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。
	在这篇文档中，我们将考虑初学 React 的开发人员使用继承时经常会遇到的一些问题，并展示如何通过组合思想来解决这些问题。
	包含关系
	有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。
	我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
	https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html

### 使用propTypes进行类型检查
	随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性：
	https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
	