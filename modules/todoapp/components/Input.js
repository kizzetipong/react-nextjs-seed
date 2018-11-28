import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  _onChange (e) {
    this.setState({ inputText: e.target.value })
  }

  _onKeyDown (e) {
    if (e.keyCode === 13) {
      const { addTodo } = this.props
      addTodo(this.state.inputText)
      this.setState({ inputText: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputText}
        onChange={(e) => this._onChange(e)}
        onKeyDown={(e) => this._onKeyDown(e)}
      />
    )
  }
}

export default Input