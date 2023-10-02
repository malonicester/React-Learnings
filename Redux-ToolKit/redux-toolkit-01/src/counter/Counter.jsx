import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/couterSlice';

export const Counter = () => {

    const count = useSelector(state=>state.counter.count);
    console.log(count)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={handleIncrement}>ADD</button>
            <button onClick={handleDecrement}>SUBTRACT</button>
        </div>
    )
}
