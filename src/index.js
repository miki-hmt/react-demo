import React from 'react';
import ReactDOM from 'react-dom';

//demo3
//引用有状态的jsx文件
import App from './app'

//react 渲染函数-- ReactDOM.render(,)
//document.getElementById("root")   对应/public/index.html中的<div id="root"></div> 根节点div容器

//demo
const react = 'hello small batch';
ReactDOM.render(<h1>{react}</h1>, document.getElementById('root'));


//demo1
//如果存在标签结构，并且标签结构需要换行，需要使用()括号括起来
function tick() {
    const element = (
        <div>
            <h1>Demo1</h1>
            <h2> Hello, small bitch! It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    //渲染函数
    ReactDOM.render(element, document.getElementById('demo1'));
}
//一秒刷新一下时间
setInterval(tick, 1000);


//demo2
//引用有状态的jsx文件,在顶部引用文件【import App from './app'】（必须要放在顶部，否则会报错）
ReactDOM.render(<App />, document.getElementById('demo2'));

//demo2-1
//在app.js中实现Home.js的引用和效果渲染 <Home/>