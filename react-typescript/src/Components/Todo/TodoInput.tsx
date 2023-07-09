import React, { useState } from "react";
import { postTodo } from "../../api";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };


  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        postTodo(title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name=""
          value={title}
          onInput={handleChange}
          placeholder="Enter Todo"
          id=""
        />
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
};

export default TodoInput;
