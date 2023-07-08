import { counterAction } from "./actionType";
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case counterAction.INCREMENT_COUNT: {
            return { ...state, count: state.count + payload };
        }
        case counterAction.DECREMENT_COUNT: {
            return { ...state, count: state.count - payload };
        }
        default:
            return state;
    }
}