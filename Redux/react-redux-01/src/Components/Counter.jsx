import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../Redux/Count/action';

const Counter = () => {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={() => dispatch(incrementCount(1))}>ADD</button>
            <button onClick={() => dispatch(decrementCount(1))}>REDUCE</button>
        </div>
    )
}

export default Counter;