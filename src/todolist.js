import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    } // end function

    addToList(input) {
        let listArr = this.state.list;
        listArr.push(input);
        this.setState({
            list: listArr,
            userInput: ''
        });
    } // end function

    render() {
        return (
            <div className="to-do-list-main">
                <input
                 onChange={ (e)=>this.changeUserInput(e.target.value) }
                 value={ this.state.userInput }
                 type="text"
                 />
                <button onClick={ ()=>this.addToList(this.state.userInput) }>Press Me</button>
                <ul>
                    { this.state.list.map(val => <li>{val}</li>) }
                </ul>
            </div>
        );
    }
} // end class

export default ToDoList;