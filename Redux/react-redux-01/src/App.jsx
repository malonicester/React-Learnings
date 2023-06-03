import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import Counter from './Components/Counter'
import { useSelector } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const loading = useSelector((state) => state.todoReucer.loading);
  console.log(loading);
  return (
    <>
      <Counter />
      <h1>Redux</h1>
      <TodoInput />
      {
        loading ? <h1>Loading...</h1> : <TodoList />
      }
    </>
  )
}

export default App
