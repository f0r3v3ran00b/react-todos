import React, { Component } from 'react';

class ToDoInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>ToDoInput</h1>
                <input onChange={(e) => this.props.handleOnChangeToInput()} type="text" placeholder={'Type something here to add to the todo list...'} />
                <button onClick={(e) => this.handleToDoSubmit()}></button>
            </div>
        )
    }
}

export default ToDoInput