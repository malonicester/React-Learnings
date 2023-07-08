import { counterAction } from "./actionType";

const initialState = {
    count: Number(localStorage.getItem('count') || 0)
}
export const CounterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case counterAction.INCREMENT_COUNT: {
            localStorage.setItem('count',state.count + payload)
            return { ...state, count: state.count + payload };
        }
        case counterAction.DECREMENT_COUNT: {
            localStorage.setItem('count',state.count - payload)
            return { ...state, count: state.count - payload };
        }
        default:
            return state;
    }
}