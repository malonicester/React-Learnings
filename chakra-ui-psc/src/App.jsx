import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Button from './Components/button/Button'
import HomeTravel from './Pages/Travel/Components/HomeTravel';
import HomeTravelRoutes from './Pages/Travel/Routes/HomeTravelRoutes';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AllRoutes />
      <HomeTravel/>
      <HomeTravelRoutes/>
    </>
  )
}

export default App;
