import { counterAction } from "./actionType";

export const incrementCount = (payload) => ({
    type: counterAction.INCREMENT_COUNT,
    payload: payload
})

export const decrementCount = (payload) => ({
    type: counterAction.DECREMENT_COUNT,
    payload: payload
})