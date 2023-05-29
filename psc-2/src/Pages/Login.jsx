import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const initial = {
  email: "",
  password: "",
};
const Login = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => login(data.token))
      .catch((err) => console.log(err))
      .finally(() => setForm(initial));
  };
  if(isAuth){
    return <Navigate to="/"/>
  }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <label htmlFor="">
          Enter Email:-
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Enter Email"
          />
        </label>
        <label htmlFor="">
          Enter Password:-
          <input
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            placeholder="Enter Password"
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
