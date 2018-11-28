import React from 'react'
import Input from '../containers/Input'
import TodoList from './TodoList'

class Todoapp extends React.Component {
  constructor(props = { todos: [] }) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <Input />
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}
export default Todoapp