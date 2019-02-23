import React, { Component } from 'react';

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
                description: 'Fall in love'
            },
            {
                id: 3,
                state: true,
                description: 'Live life'
            }]
        }

    }

    handleToDoClick = (id, event) => {
        console.log(`ID of item checked is: ${id}`)
        // Get the object that was checked
        let selectedToDo = this.state.todos.find((todo) => {
            return todo.id === id
        })
        console.log('selected todo old state: ' + JSON.stringify(selectedToDo))
        selectedToDo.state = !selectedToDo.state
        console.log('selected todo new state: ' + JSON.stringify(selectedToDo))

        let filteredToDos = this.state.todos.filter((todo) => {
            return todo.id != id
        })
        console.log('remaining list: ' + JSON.stringify(filteredToDos))

        filteredToDos.push(selectedToDo)
        console.log('new list: ' + JSON.stringify(filteredToDos))

        this.setState({
            todos: filteredToDos
        })

    }

    render() {
        return (
            this.state.todos.map((todo) => {
                return (
                    <div>
                        <input checked={todo.state?'checked':''} type='checkbox'  className='form-check-input' id='exampleCheck1'
                        onClick={(e) => this.handleToDoClick(todo.id)}
                        />
                        <span className={todo.state?'checked':''}>{todo.description}</span>

                    </div>
                )
            })
        )
    }

}

export default ToDos