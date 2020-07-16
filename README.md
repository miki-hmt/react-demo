
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

## react基础知识
	基础参数：
	const react = 'hello small batch';
	ReactDOM.render(<h1>{react}</h1>, document.getElementById('root'));
	//react 渲染函数-- ReactDOM.render(,)
	//document.getElementById("root")   对应/public/index.html中的<div id="root"></div> 根节点div容器
### jsx语法：
	javascript + xml语法(html)
	解毒jsx语法：遇到<>按照html解析，遇到{}按照javascript解析

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
	