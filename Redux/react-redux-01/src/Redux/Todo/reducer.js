import { todoActions } from "./actionType";

const initState = {
    loading: false,
    todos: [],
    error: false
}

export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case todoActions.GET_TODO_REQUEST || todoActions.ADD_TODO_REQUEST: {
            return {
                ...state, loading: true
            }
        }
        case todoActions.GET_TODO_SUCCESS || todoActions.ADD_TODO_SUCCESS: {
            return {
                ...state, loading: false, todos: payload
            }
        }
        case todoActions.GET_TODO_FAILURE || todoActions.ADD_TODO_FAILURE: {
            return {
                ...state, error: true, loading: false
            }
        }
        default: return state;
    }
}