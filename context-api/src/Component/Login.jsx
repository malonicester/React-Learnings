import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
function Login() {
  const { authentication,toggleAuthentication } = useContext(AuthContext);
  return (
    <div>
      <h1>{authentication ? "Welcome To Home Page" : "Please Login First"}</h1>
      <button onClick={toggleAuthentication}>{authentication?"Logout":"Log in "}</button>
    </div>
  );
}

export default Login;
