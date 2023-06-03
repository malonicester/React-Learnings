import { todoActions } from "./actionType";
import axios from 'axios';


export const getTodoRequest = () => ({
    type: todoActions.GET_TODO_REQUEST
});

export const getTodoSuccess = (data) => ({
    type: todoActions.GET_TODO_SUCCESS,
    payload: data
})
export const getTodoFailure = () => ({
    type: todoActions.GET_TODO_FAILURE
})

export const getTodo = () => (dispatch) => {
    dispatch(getTodoRequest());
    axios.get("http://localhost:3000/todos")
        .then(res => dispatch(getTodoSuccess(res.data)))
        .catch((err) => dispatch(getTodoFailure()));
}

export const addTodoRequest = () => ({
    type: todoActions.ADD_TODO_REQUEST
})

export const addTodoFailure = () => ({
    type: todoActions.ADD_TODO_FAILURE
})

export const addTodoSuccess = (data) => ({
    type: todoActions.ADD_TODO_SUCCESS,
    payload: data
})

export const addTodo = ({ title }) => async (dispatch, getState) => {
    console.log("title", title);
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction);
    try {
        const res = await axios.post("http://localhost:3000/todos",
            {
                title,
                completed: false
            }
        );
        console.log(res);
        const todoSuccessActions = addTodoSuccess();
        dispatch(todoSuccessActions);
    } catch (err) {
        console.log(err);
        const todoFailureAction = addTodoFailure();
        dispatch(todoFailureAction);
    }
}