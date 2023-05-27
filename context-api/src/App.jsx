import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
const ExampleChild = () => {
  return <>
    <h1>This is ExampleChild</h1>
  </>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to context api</h1>
      <Navbar/>
    </>
  );
}

export default App;
