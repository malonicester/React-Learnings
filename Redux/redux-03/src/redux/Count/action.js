import { counterAction } from "./actionType";

export const addAction = (payload = 1) => ({ type: counterAction.INCREMENT_COUNT, payload})

export const subtractAction = (payload = 1) => ({ type: counterAction.DECREMENT_COUNT, payload})