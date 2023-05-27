import React from "react";
function AddTodo  (props) {
    
    const [text, setText] = React.useState("");
    const handleTodoChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }
    return (
        <>
            <h1>Todo List</h1>
            <label htmlFor="">Write Todos : </label>
            <input type="text" placeholder="add Todos" onChange={handleTodoChange} />
            <button onClick={()=> props.addTodoHandler(text)}>Submit</button>
        </>
    );
}
export default AddTodo;