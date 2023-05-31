import { useState } from 'react'
import './App.css'
import SampleThemeDemoOne from './Components/SampleThemeDemoOne'
import FormExample from './Components/FormExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SampleThemeDemoOne />
      <FormExample />
    </>
  )
}

export default App
