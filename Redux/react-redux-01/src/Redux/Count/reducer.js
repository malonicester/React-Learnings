import { counterAction } from "./actionType";


const initState = {
    count: 0
}

export const counterReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case counterAction.INCREMENT_COUNT: {
            return {
                ...state, count: state.count + payload
            }
        }
        case counterAction.DECREMENT_COUNT: {
            return {
                ...state, count: state.count - payload
            }
        }

        default: return state;
    }
}