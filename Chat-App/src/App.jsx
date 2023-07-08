window.global ||= window
import { Button } from '@chakra-ui/react';
import RouteComponent from './Components/Route.component';
import HomePage from './Pages/HomePage';
function App() {


  return (
    <>
      <RouteComponent />
      <Button>Hello</Button>
      {/* <HomePage /> */}
    </>
  )
}

export default App
