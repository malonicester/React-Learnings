import { useEffect, useReducer } from 'react'
import './App.css'
import axios from 'axios';
import Products from './Components/Products';

const initialState = {
  loading: true,
  error: true,
  data: null
}

const getData = () => {
  return axios.get(`https://reqres.in/api/users`, {
    params: {
      id: 1
    }
  });
}

function reducerCallback(state, action) {
  switch (action.type) {
    case "GET_USER_REQUEST": {
      return { ...state, loading: true, error: false }
    }
    case "GET_USER_SUCCESSFUL": {
      return { ...state, loading: false, error: false, data: action.payload };
    }
    case "GET_USER_FAILURE": {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
}
function App() {

  const [state, dispatch] = useReducer(reducerCallback, initialState);

  // useEffect(() => {
  //   dispatch({ type: "GET_USER_REQUEST" });
  //   getData().then((res) => {
  //     console.log(res.data.data);
  //     dispatch({ type: "GET_USER_SUCCESSFUL", payload: res.data.data })
  //   }).catch((err) => dispatch({ type: "GET_USER_FAILURE" }))
  //   console.log(state);
  // }, [])


  // if (state.loading) {
  //   return <h1>Loading...</h1>
  // }
  // if (state.error) {
  //   return <h1>Error...</h1>
  // }
  return (
    <>
      <Products/>
    </>
  )
}

export default App;
