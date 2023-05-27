import { useState } from 'react';
import './App.css';
import Form from './task/Form';
function App() {
  let name = "Ashish";
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Hello World {name}</h1>
      {/* <MyApp /> */}
      {/* {show && <Timer/>} */}
      {/* <button onClick={()=> setShow((show)=> !show)}> {show ? "HIDE" :"SHOW"}</button> */}
      {/* <Products/> */}
      {/* <Demo /> */}
      {/* <Task/> */}
      <Form/>
    </div>
  );
}

export default App;
