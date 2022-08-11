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
import Counter2 from './Components/useReducer/Counter2/Counter2'
import ComplexCounter from './Components/useReducer/ComplexCounter/ConplexCounter'
import SimpleCounter from './Components/useReducer/SimpleCounter/SimpleCounter'
import AppAlt from './AppAlt'
import GetPost from './Components/useReducer/GetPost/GetPost'
import GetPost2 from './Components/useReducer/GetPost2/GetPost2'
import LayoutComponentOne from './Components/CustomHook/LayoutComponentOne/LayoutComponentOne'
import LayoutComponentTwo from './Components/CustomHook/LayoutComponentTwo/LayoutComponentTwo'


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <TodoList/>
      <Counter/> */}
      {/* <MyComponentClass/> */}
      {/* <div>
        {show && <MyComponent/>}
      </div> */}
     
      {/* <p> <button type="button" onClick={()=> setShow((prevState)=> !prevState)}>{show ? 'Hide post' : 'Show post'}</button></p>
      <Main/>
      <Form/>
      <Time/>
       */}
       {/* <Counter2/> */}
       {/* <ComplexCounter/> */}
       {/* <SimpleCounter/> */}
       {/* <AppAlt/> */}
       {/* <GetPost/> */}
       {/* <GetPost2/> */}
       <LayoutComponentOne/>
       <LayoutComponentTwo/>
    </div>
  )
}

export default App
