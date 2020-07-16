import React from 'react';
import ReactDOM from 'react-dom';

//react 渲染函数-- ReactDOM.render(,)
//document.getElementById("root")   对应/public/index.html中的<div id="root"></div> 根节点div容器

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