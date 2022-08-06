import React, { Component } from 'react';

class TodoList extends Component {
    state = {
      todo : '',
      warning : null
    }

   handleTodoChange = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? 'You need JavaScript skill to complete the task. Do you have it?'
    : null;
    this.setState({
        todo : inputValue,
        warning
    })
   }
    render() {
        const { todo, warning } = this.state;
        return (
           
            <>
            <p>{todo}</p>
            <p>
                <textarea name = "todo" value={todo} onChange={this.handleTodoChange}/>  
            </p>
            <h3>{warning || 'Good Work' }</h3>
            </>
        );
    }
}

export default TodoList;