import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, subtractAction } from './redux/action';
const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(addAction());
    }
    const handleDecrement = () => {
        dispatch(subtractAction());
    }


    return (
        <>
            <div>Count {count} </div>
            <button onClick={handleIncrement} >ADD</button>
            <button onClick={handleDecrement} >SUBTRACT</button>
        </>
    )
}

export default Counter;