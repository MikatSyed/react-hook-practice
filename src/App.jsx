import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './Components/UseState/TodoList.jsx/TodoList'
import Todo from './Components/UseState/Todo/Todo'
import Counter from './Components/UseState/Counter/Counter'
import MyComponentClass from './Components/UseEffect/MyComponentClass/MyComponentClass';
import MyComponent from './Components/UseEffect/myComponent/MyComponent'
import Main from './Components/UseCallBack & UseMemo/main/main'
import Time from './Components/UseRef/Time/Time'
import Form from './Components/UseRef/Form/Form'


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <TodoList/>
      <Counter/>
      {/* <MyComponentClass/> */}
      <div>
        {show && <MyComponent/>}
      </div>
     
      <p> <button type="button" onClick={()=> setShow((prevState)=> !prevState)}>{show ? 'Hide post' : 'Show post'}</button></p>
      <Main/>
      <Form/>
      <Time/>
      
    </div>
  )
}

export default App
