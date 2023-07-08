import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, subtractAction } from './redux/Count/action';
const Counter = () => {

    const count = useSelector(state => state.count.count);
    const dispatch = useDispatch();
    console.log(count)

    const handleIncrement = () => {
        dispatch(addAction());
    }
    const handleDecrement = () => {
        dispatch(subtractAction());
    }


    return (
        <>
            <div> <h1>Count {count}</h1>  </div>
            <button onClick={handleIncrement} >ADD</button>
            <button onClick={handleDecrement} >SUBTRACT</button>
        </>
    )
}

export default Counter;