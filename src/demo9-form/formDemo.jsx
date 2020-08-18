
import React from 'react'

export default class FormDemo extends React.Component{

    constructor(){
        super();
        this.state = {
            value: '',
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitHandle =(e) =>{
        //阻止表单提交，刷新页面  2020.08.07 miki
        e.preventDefault();

        console.log(this.state.value);
    }

    onChangeHandle =(e) =>{
        this.setState({
            value: e.target.value
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div>
                <h1>demo9--表单受控组件</h1>
                提交信息: {this.state.value}
                <form onSubmit={this.submitHandle}>
                    <label>
                        参与:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        来宾人数:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        表单提交:
                    <input type="text" value={this.state.value} onChange={this.onChangeHandle}/>
                    <button type="submit">提交</button>
                    </label>
                </form>

            </div>
        )
    }
}