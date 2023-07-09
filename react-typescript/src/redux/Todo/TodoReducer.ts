import { Todo } from "../../Components/Todo/types/TodoTypes";
import { TodoActionType } from "./TodoActionType";

interface ActionType {
    type: TodoActionType,
    payload: Array<Todo>
}

export interface TodoInitialState {
    todo: Array<Todo> | null,
    loading: boolean,
    error: boolean
}

const initialState: TodoInitialState = {
    todo: null,
    loading: false,
    error: false
}
export const TodoReducer = (state = initialState, { type, payload }: ActionType):TodoInitialState => {
    switch (type) {
        case TodoActionType.ADD_TODO_REQUEST || TodoActionType.GET_TODO_REQUEST || TodoActionType.UPDATE_TODO_REQUEST: {
            return { ...state, loading: true, error: false };
        }
        case TodoActionType.ADD_TODO_SUCCESS || TodoActionType.GET_TODO_SUCCESS || TodoActionType.UPDATE_TODO_SUCCESS: {
            return { ...state, loading: false, todo: payload, error: false };
        }
        case TodoActionType.ADD_TODO_FAILURE || TodoActionType.GET_TODO_FAILURE || TodoActionType.UPDATE_TODO_FAILURE: {
            return { ...state, loading: false, error: true };
        }
        default:
            return state;
    }
}