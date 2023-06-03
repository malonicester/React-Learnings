import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import Login from "./components/Login";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>This is app Component</h1>
      <Greet name="Ashish" messageCount={12} isLoggedIn={false} />
      <Person name={{ first: "ashish", last: "tripathy" }} />
      <Login />
    </>
  );
};

export default App;
