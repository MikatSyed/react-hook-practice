
import { useState } from 'react';

    const TodoList = () => {
    const [todo,setTodo] = useState('')
    const [warning,setWarning] = useState(null)

    const handleTodoChange = (e) =>{
     const inputValue = e.target.value;
     const warning = inputValue.includes(".js") ? 'You need JavaScript skill to complete the task. Do you have it?'
    : null;
    setTodo(inputValue)
    setWarning(warning)
    }
    return (
        <>
          <h2>useState Exercise</h2>
             <p>{todo}</p>
             <p>
                 <textarea name = "todo" value={todo} onChange={handleTodoChange}/>  
             </p>
             <h3>{warning || 'Good Work' }</h3>
        </>
    )
}

export default TodoList