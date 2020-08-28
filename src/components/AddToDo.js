import React from 'react';
import ToDoList from './ToDoList'

export default class AddToDo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      todos: [],
      completedTodos: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const todoCopy = this.state.todos.slice()
    todoCopy.push(this.state.value)

    this.setState({
      value: '',
      todos: todoCopy
    })
  }
  toggleTodo(todo) {
    const completedCopy = this.state.completedTodos.slice()
    const index = completedCopy.indexOf(todo)

    index === -1 ? 
        completedCopy.push(todo) 
      : completedCopy.splice(index, 1)

    this.setState({
      completedTodos: completedCopy
    })
  }
  render () {
    return (
      <>
        <div className='container bg-light add-todo'>
          <form className='add-form' onSubmit={this.handleSubmit}>
            <h3>Add a new task</h3>
            <div className='input-btn-container'>
              <input 
                type='text'
                className='add-input'
                placeholder='ex: morning yoga'
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input
                className='add-btn'
                type='submit'
                value='Add'
              />
            </div>
          </form>
        </div>
        <ToDoList 
          todos={this.state.todos}
          completedTodos={this.state.completedTodos}
          toggleTodo={this.toggleTodo}
        />
      </>
    )
  }
}