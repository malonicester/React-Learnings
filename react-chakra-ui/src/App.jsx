import { useState } from 'react'
import './App.css'
import BoxExample from './Components/BoxExample'
import CenterExample from './Components/CenterExample'
import ContainerExample from './Components/ContainerExample'
import SimpleGridExample from './Components/SimpleGridExample'
import { StackExample, StackOnlyExample } from './Components/StackExample'
import { FlexExample, GridExample } from './Components/FlexGridExample'
import AlertDailougeExample from './Components/AlertDailougeExample'
import ModalExample from './Components/ModalExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BoxExample />
      <CenterExample />
      <ContainerExample />
      <SimpleGridExample /> */}
      {/* <h1>Chakra - ui</h1> */}
      <StackOnlyExample />
      {/* <br /> */}
      {/* <br /> */}
      {/* <StackOnlyExample/> */}
      {/* <FlexExample /> */}
      {/* <GridExample/> */}
      <AlertDailougeExample />
      <ModalExample />
    </>
  )
}

export default App
