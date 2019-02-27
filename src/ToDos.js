import React, { Component } from 'react';
import ToDoInput from "./ToDoInput";
import uuid from "uuid";

class ToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1,
                state: false,
                description: 'Walk on mars'
            },
            {
                id: 2,
                state: true,
                description: 'Drink water'
            },
            {
                id: 3,
                state: true,
                description: 'Watch Captain Marvel'
            }],
            currentInput: ''
        }

    }

    handleToDoSubmit = (newToDo, event) => {

        let newToDos = this.state.todos.concat({
            id: uuid.v4(),
            description: newToDo,
            state: false
        })
        this.setState({

        })
    }

    handleOnChangeToInput = (e) => {
        this.state.currentInput = e.target.value
    }

    handleToDoClick = (id, event) => {
        let clonedToDos = JSON.parse(JSON.stringify(this.state.todos));
        // Get the object that was checked
        let selectedToDo = this.state.todos.find((todo) => {
            return todo.id === id
        })
        selectedToDo.state = !selectedToDo.state

        clonedToDos.map((clonedToDo) => {
            if (clonedToDo.id == id) {
                clonedToDo.state = !clonedToDo.state
            }
        })

        this.setState({
            todos: clonedToDos
        })

    }

    render() {
        return (
            <div >
                <h1 className='todo-header'>React Todos!!!</h1>
                <hr/>
                <ToDoInput handleOnChangeToInput={this.handleOnChangeToInput}/>
                <hr/>
                <div className='todo-list'>
                    {
                        this.state.todos.map((todo) => {
                            return (
                                <div>

                                    <input checked={todo.state ? 'checked' : ''} type='checkbox' className='todo-checkbox'
                                        onClick={(e) => this.handleToDoClick(todo.id)}
                                    />
                                    <span className={todo.state ? 'todo-description checked' : 'todo-description'}>{todo.description}</span>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default ToDos