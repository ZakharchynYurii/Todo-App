import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    state = {
        input: ''
    }

    getInputValue = (e) => {
        this.setState({input: e.target.value})
    }

    render() {
        let {addTask} = this.props;
        let {input} = this.state;
        return (
            <div className={"input"}>
                <input onChange={this.getInputValue} value={input} className={"inputForTask"} type="text"/>
                <button onClick={addTask.bind(this, input)} className={"addBtn"}>ADD</button>
            </div>
        );
    }
}

export default Input;