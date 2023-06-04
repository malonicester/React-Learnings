import todoActions from "./actionType";

const initState = {
    loading: false,
    error: false,
    todos: []
}

export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case todoActions.ADD_TODO_REQUEST || todoActions.GET_TODO_REQUEST || todoActions.UPDATE_TODO_REQUEST: {
            return {
                ...state, loading: true, error: false
            }
        }
        case todoActions.GET_TODO_SUCCESS || todoActions.ADD_TODO_SUCCESS || todoActions.UPDATE_TODO_SUCCESS: {
            return {
                ...state, loading: false, error: false, todos: payload
            }
        }
        case todoActions.ADD_TODO_FAILURE || todoActions.GET_TODO_FAILURE || todoActions.UPDATE_TODO_FAILURE: {
            return {
                ...state, loading: false, error: true
            }
        }
        default: return state;
    }
}