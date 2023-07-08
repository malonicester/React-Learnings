import { TodoActions } from "./actionType";

const initalState = {
    todo: [],
    loading: false,
    error: false
}
export const TodoReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case TodoActions.GET_TODO_REQUEST || TodoActions.GET_TODO_REQUEST: {
            return { ...state, loading: true, error: false };
        }
        case TodoActions.GET_TODO_SUCCESS || TodoActions.UPDATE_TODO_SUCCESS || TodoActions.ADD_TODO_SUCCESS: {
            return { ...state, loading: false, error: false, todo: payload }
        }
        case TodoActions.GET_TODO_FAILURE || TodoActions.UPDATE_TODO_FAILURE || TodoActions.ADD_TODO_FAILURE: {
            return { ...state, loading: false, error: true };
        }
        default:
            return state;
    }
}