
import React from 'react';
import styles from './index.scss';
export default class ImageList extends React.Component{

    constructor(){
        super();
    }

    waterfall(container, box) {
        // 取出box属性的元素
        var oParent = document.querySelector(container);
        var oBoxs = this.getByClass(container, box);
        debugger
        // console.log(oBoxs.length)
        //计算页面显示列数（页面宽度/box宽度）
        var boxWidth = oBoxs[0].offsetWidth;
        // console.log(boxWidth)
        var cols = Math.floor(document.documentElement.clientWidth / boxWidth);
        // console.log(cols)
        //set container module width
        oParent.style.cssText = 'width:' + boxWidth * cols + 'px;';
        //取出首行图片的数组高度
        var heightArr = [];
        for (var i = 0; i < oBoxs.length; i++) {
            if (i < cols) {
                heightArr[heightArr.length] = oBoxs[i].offsetHeight;
            } else {
                var minH = Math.min.apply(null, heightArr);
                var index = this.getMinHeightIndex(heightArr, minH);
                oBoxs[i].style.position = 'absolute';
                oBoxs[i].style.top = minH + 'px';
                oBoxs[i].style.left = boxWidth * index + 'px';
                // oBoxs[i].style.left = oBoxs[index].offsetHeight + 'px'
                heightArr[index] += oBoxs[i].offsetHeight;
            }
        }
    }
    getByClass(container, box) {
        var boxArray = document.querySelectorAll(container + ' ' + box);
        return boxArray;
    }
//返回每行高度最小的图片索引地址
    getMinHeightIndex(arr, height) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === height) return i;
        }
    }

//监测是否加载新内容
    checkScrollSlide() {
        var oBoxs = this.getByClass('.container', '.box');
        var lastBox = oBoxs[oBoxs.length - 1];
        var lastBoxH = lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2);
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.body.clientHeight || document.documentElement.clientHeight;
        return lastBoxH < height + scrollTop ? true : false;
    }

    appendElementWithClass(parent, ele, classN) {
        var element = document.createElement(ele);
        element.className = classN;
        parent.appendChild(element);

        return element;
    }

    componentDidMount() {
        var dataInt = {
            data: [{ src: '0.jpg',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deleniti, amet dolores doloremque commodi quasi molestiae provident recusandae veniam. Nesciunt quis, neque! Maiores ea alias mollitia amet consequatur optio iste.' }, { src: '1.jpg',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deleniti, amet dolores doloremque commodi quasi molestiae provident recusandae veniam. Nesciunt quis, neque! Maiores ea alias mollitia amet consequatur optio iste.' }, { src: '2.jpg',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deleniti, amet dolores doloremque commodi quasi molestiae provident recusandae veniam. Nesciunt quis, neque! Maiores ea alias mollitia amet consequatur optio iste.' }, { src: '3.jpg',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio deleniti, amet dolores doloremque commodi quasi molestiae provident recusandae veniam. Nesciunt quis, neque! Maiores ea alias mollitia amet consequatur optio iste.' }]
        };

        this.waterfall('.container', '.box');
        window.onscroll = function () {
            console.log('test');
            if (this.checkScrollSlide()) {
                console.log('11111');
                var container = document.querySelector('.container');
                //渲染数据块到尾部
                for (var i = 0; i < dataInt['data'].length; i++) {
                    var Box = this.appendElementWithClass(container, 'div', 'box');
                    var Pic = this.appendElementWithClass(Box, 'div', 'pic');
                    var PTag = this.appendElementWithClass(Box, 'p', 'about');
                    var Img = this.appendElementWithClass(Pic, 'img', '');

                    PTag.innerHTML = dataInt.data[i].detail;
                    Img.src = 'images/' + dataInt.data[i].src;
                }
            }
            this.waterfall('.container', '.box');
        };
    }

    render() {
        return(
            <div>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img ssrc={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src={require('../images/0.jpg')} alt="image"/>
                        </div>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga earum
                            perspiciatis omnis officia facere veritatis placeat dolor sapiente minima aliquam error
                            quam, et qui cumque tenetur veniam, illum reiciendis? Accusamus!</p>
                    </div>
                </div>
            </div>
        )
    }
}