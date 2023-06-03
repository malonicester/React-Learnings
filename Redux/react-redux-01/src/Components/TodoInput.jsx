import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, getTodo } from '../Redux/Todo/action';
const TodoInput = () => {
    const [title, setTitle] = React.useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodo());
    }, []);

    const handleAddTodo = () => {
        dispatch(addTodo({
            title: title
        })).then((res) => {
            dispatch(getTodo());
        }).catch((err) => console.log(err));
    }
    return (
        <div>
            <h3>Add Todo</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='add Something' />
            <button onClick={handleAddTodo} >ADD</button>
        </div>
    )
}

export default TodoInput;