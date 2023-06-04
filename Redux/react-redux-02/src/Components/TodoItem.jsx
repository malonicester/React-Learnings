import React from 'react'

const TodoItem = ({ id, title, completed, toggleStatusHandler }) => {
    return (
        <div >
            <h2>{title}</h2>
            <h3>{completed ? "Completed" : "Pending"}</h3>
            <button onClick={() => toggleStatusHandler(id,completed)} > Toggle Status </button>
        </div>
    )
}

export default TodoItem;