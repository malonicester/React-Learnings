import React from "react";

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const handleLogin = (): void => {
    console.log("si");
    setIsLoggedIn(!isLoggedIn);
  };
  console.log(isLoggedIn);
  return (
    <>
      <div>{isLoggedIn ? "Welcome to Home Page" : "Please Login First"}</div>
      <button onClick={handleLogin}>
        {" "}
        {isLoggedIn ? "Log out" : "Log in"}{" "}
      </button>
    </>
  );
};

export default Login;
