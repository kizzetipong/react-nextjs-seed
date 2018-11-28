import { connect } from 'react-redux'
import Component from '../components/Todoapp'

export default connect(state => state.todoapp)(Component)

// const mapStateToProp = (state) => ({
//   todos: state.todoapp.todos,
// })

// export default connect(mapStateToProp)(Component)
