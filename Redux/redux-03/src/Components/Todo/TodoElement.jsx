
const TodoElement = ({ id, title, completed, handleStatus }) => {
    return (
        <div style={{ display: 'flex', gap: '30px' }} key={id} >
            <h2> {title} </h2>
            <h3>{completed ? "Completed" : "Not Completed"}</h3>
            <button onClick={() => handleStatus(id, completed)}> Change Status </button>
        </div>
    )
}

export default TodoElement;