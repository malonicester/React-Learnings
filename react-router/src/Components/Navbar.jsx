import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../Context/AuthContextProvider";

const allLinks = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/users", text: "Users" },
];

function Navbar() {
  const { auth, toggleAuth } = useContext(AuthContext);
  return (
    <div className="navbar-container">
      {allLinks.map((link) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "white" };
            }}
            to={link.path}
            key={link.path}
          >
            {link.text}
          </NavLink>
        );
      })}
      <div>
        <button onClick={toggleAuth}>{auth ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
}

export default Navbar;
