import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => state.todoReucer.todos);
    return (
        <div>
            {
                todos?.map((item) => <div key={item.id}>
                    <h1 key={item.id}>{item.id}. {item.title} status:{!item.completed ? "Not Completed" : "Completed"}</h1>
                    <button>TOGGLE STATUS</button>
                </div>)
            }
        </div>
    )
}

export default TodoList