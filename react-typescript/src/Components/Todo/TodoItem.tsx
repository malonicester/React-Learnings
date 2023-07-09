import React from "react";
import { TodoProps } from "./types/TodoTypes";

const TodoItem = ({ id, title, completed, handleStatus }: TodoProps) => {
  return <div key={id}>
    <h3>{title}</h3>
    <h4>{completed}</h4>
    <button onClick={()=>handleStatus(id,completed)} ></button>
  </div>;
};

export default TodoItem;
