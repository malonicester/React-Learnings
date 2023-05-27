import React from "react";
const TodoComponent = (props)=>{
    return (
            <>
                <li key={props.todo.id}>{props.todo.toDotitle} - {props.todo.status ? "Completed" : "Not Completed"}
                <button onClick={()=>props.handleToggle(props.todo.id)}>Toggle</button>
                <button onClick={()=>props.handleDelete(props.todo.id)}>Delete</button>
                </li>
            </>
    );
}
export default TodoComponent;