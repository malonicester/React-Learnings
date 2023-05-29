import { useReducer } from 'react';
import './App.css';
import Users from './Components/Users';

const reducerCallback = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
}
let output = reducerCallback(0, { type: "INCREMENT" });
console.log(output);


function App() {

  const [state, dispatch] = useReducer(reducerCallback, 0);

  const handleAdd = () => {
    dispatch({ type: "INCREMENT" });
  }
  const handleReduce = () => {
    const action = { type: "DECREMENT" };
    dispatch({ type: "DECREMENT" });
  }
  return (
    <>
      {/* <h1>count:- {state}</h1>
      <button onClick={handleAdd}>Increase</button>
      <button disabled={state === 0} onClick={handleReduce}>Decrease</button> */}
      <Users/>
    </>
  )
}

export default App
