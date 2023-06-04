import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <TodoInput />
      <hr />
      <TodoList/>
    </>
  )
}

export default App
