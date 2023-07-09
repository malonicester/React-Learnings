import { Todo } from "../../Components/Todo/types/TodoTypes";

export enum TodoActionType {
    ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS",
    ADD_TODO_REQUEST = "ADD_TODO_REQUEST",
    ADD_TODO_FAILURE = "ADD_TODO_FAILURE",
    GET_TODO_SUCCESS = "GET_TODO_SUCCESS",
    GET_TODO_REQUEST = "GET_TODO_REQUEST",
    GET_TODO_FAILURE = "GET_TODO_FAILURE",
    UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST",
    UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS",
    UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE",
}

export interface TodoSuccessAction {
    type: TodoActionType.GET_TODO_SUCCESS | TodoActionType.UPDATE_TODO_SUCCESS | TodoActionType.ADD_TODO_SUCCESS,
    payload: Todo[]
}

export interface TodoRequestAction {
    type: TodoActionType.ADD_TODO_REQUEST | TodoActionType.GET_TODO_REQUEST | TodoActionType.UPDATE_TODO_REQUEST
}

export interface TodoFailureAction {
    type: TodoActionType.GET_TODO_FAILURE | TodoActionType.ADD_TODO_FAILURE | TodoActionType.UPDATE_TODO_FAILURE
}

export type TodoAction =
    | TodoSuccessAction
    | TodoFailureAction
    | TodoRequestAction;