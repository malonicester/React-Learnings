import { useState } from 'react'
import { Counter } from './counter/Counter'
import Post from './posts/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Post/>
    </>
  )
}

export default App
