import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/products", title: "Products" },
  { path: "/login", title: "Login" },
];

const Navbar = () => {
  return (
    <div className="navbar-container">
      {links?.map((link) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { background: "blueviolet", borderRadius: "7px" }
                : { };
            }}
            to={link.path}
            key={link.path}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
