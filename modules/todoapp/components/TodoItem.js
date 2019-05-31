import { Button } from '@material-ui/core';
import './TodoItem.less'

export default function TodoItem ({ todo, removeTodo }) {
  return (
    <div style={{marginTop: 16, marginBottom: 16}}>
      <span className='textRed'>{ todo.title } </span>
      <Button size='small' color='primary' variant='contained' onClick={() => removeTodo(todo.id)}>X</Button>
    </div>
  )
}
