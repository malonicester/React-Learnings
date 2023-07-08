import { counterAction } from "./actionType";

export const addAction = () => ({ type: counterAction.INCREMENT_COUNT, payload: 1 })

export const subtractAction = () => ({ type: counterAction.DECREMENT_COUNT, payload: 1 })