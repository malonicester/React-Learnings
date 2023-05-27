import React from 'react';
import TodoComponent from './TodoComponent';
import AddTodo from './AddTodo';

export const Todo = () => {
    const[count,setCount] = React.useState(1);
    const [todos, setTodos] = React.useState([]);
    const addTodoHandler = (text) => {
        const newItem = {
            toDotitle: text,
            status: false,
            id: count
        }
        setCount(count+1);
        let todoListAfterItemAddition = [...todos, newItem];
        setTodos(todoListAfterItemAddition);
        console.log(todos);
    }
    const handleToggle = (id) => {
        const todosAfterUpdation = todos.map((todo) => todo.id === id ? 
        { ...todo, status: !todo.status } : todo)
        setTodos(todosAfterUpdation);
    }
    const handleItemDeletion = (id) => { 
        const todosAfterDeletion = todos.filter((todo)=> todo.id !== id);
        setTodos(todosAfterDeletion);
    }
    return (
        <>
            <AddTodo addTodoHandler={addTodoHandler} />
            <div>
                {
                    todos.map((e) => (
                        <TodoComponent  handleToggle = {handleToggle} todo={e} handleDelete = {handleItemDeletion}/>
                    )
                    )
                }
            </div>
        </>
    );
}