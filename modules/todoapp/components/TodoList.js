import TodoItem from '../containers/TodoItem'

export default function TodoList ({ todos = [] }) {
  return (
    <div>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
    </div>
  )
}
