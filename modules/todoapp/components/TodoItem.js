import './TodoItem.less'

export default function TodoItem ({ todo, removeTodo }) {
  return (
    <div>
      <span>{ todo.title } </span>
      <button className="bgRed" onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  )
}
