import React from 'react'
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component{


    render(){
        return(
            <div>
                <h1>demo13 - propsType类型检查 - 检查title</h1>
                Hello:{ this.props.title }
            </div>
        )
    }
}

// PropsTypeDemo.propTypes = {
//     title:PropTypes.number.isRequired
// }

PropsTypeDemo.propTypes = {
    title:PropTypes.string
    //title:PropTypes.number    2020.08.17 miki 如果改为数字类型，由于title是字符型，类型检查时会报错
}

PropsTypeDemo.defaultProps = {
    title:'默认值'
}