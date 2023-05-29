import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
  const { isAuth, token } = useContext(AuthContext);
  console.log(isAuth,token);
  if(!isAuth){
    return  <Navigate to="/login"/>
  }
  return children;
};

export default PrivateRoute;
