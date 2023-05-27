import React, { useState } from "react";
const intialState = {
  username: "",
  password: "",
  country: "",
  isMarried: false,
};
function Form() {
  const [formState, setFormState] = useState(intialState);
  const [user, setUser] = useState([]);
  const { username, password, country, isMarried } = formState;

  const handleChange = (e) => {
    const val = e.target.type === "chec" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((users) => [...users, formState]);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">UserName:- </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          id=""
        />
        <br />
        <label htmlFor="">Password:- </label>
        <input
          type="text"
          value={password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <label htmlFor="">Country:- </label>
        <select name="country" id="" value={country} onChange={handleChange}>
          <option value="india">INDIA</option>
          <option value="china">CHINA</option>
          <option value="uae">UAE</option>
        </select>
        <br />
        <label htmlFor="">Are you married ? :- </label>
        <input
          type="checkbox"
          name="isMarried"
          onChange={handleChange}
          value={isMarried}
          id=""
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
