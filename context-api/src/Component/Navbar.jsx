import React from "react";
import { AppContext } from "../AppContextProvider";
import { ThemeContext } from "../Context/ThemeContextProvider";
import "./navbar.css";
import Footer from "./Footer";
import Button from "./Button";
import Login from "./Login";

function Navbar() {
  const context = React.useContext(AppContext);
  const theme = React.useContext(ThemeContext);
  console.log(context);
  console.log(theme);
  return (
    <div
      style={{
        background: theme.theme === "dark" ? "black" : "white",
        color: theme.theme === "dark" ? "white" : "black",
      }}
    >
      <div className="navbar-container">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Login</h2>
        <h2>Sign up</h2>
      </div>
      <h1>{context}</h1>
      <h1>style : - {theme.theme}</h1>
      <Footer />
      <Button/>
      <Login/>
    </div>
  );
}

export default Navbar;
