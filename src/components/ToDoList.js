import React from 'react';
import { BsSquare, BsCheckBox } from "react-icons/bs";

export default class ToDoList extends React.Component {
  render() {
    const unchecked = this.props.todos.filter(todo => this.props.completedTodos.indexOf(todo) === -1)
    const checked = this.props.completedTodos

    return (
      <div className='container'>
        <ul className='list'>
          {unchecked.map((todo, index) => (
            <li key={index}>
              <button className='list-btn' onClick={() => this.props.toggleTodo(todo)}>
                <BsSquare />
              </button> <span className='list-todo'>{todo}</span>
            </li>
          ))}
          {checked.map((todo, index) => (
            <li key={index}>
              <button className='list-btn' onClick={() => this.props.toggleTodo(todo)}>
                <BsCheckBox />
              </button> <span className='list-todo checked'>{todo}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}