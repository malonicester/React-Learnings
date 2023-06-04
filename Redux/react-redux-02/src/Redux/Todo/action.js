import todoActions from "./actionType";
import axios from 'axios';


export const getTodoSuccess = (payload) => {
    return {
        type: todoActions.GET_TODO_SUCCESS,
        payload: payload
    }
}

export const addTodoSuccess = (payload) => ({
    type: todoActions.ADD_TODO_SUCCESS,
    payload: payload
})

export const getTodoRequest = () => ({ type: todoActions.GET_TODO_REQUEST });

export const addTodoRequest = () => ({ type: todoActions.ADD_TODO_REQUEST });

export const addTodoFailure = () => ({ type: todoActions.ADD_TODO_FAILURE });

export const getTodoFailure = () => ({ type: todoActions.GET_TODO_FAILURE });

export const updateTodoSuccess = (payload) => ({ type: todoActions.UPDATE_TODO_SUCCESS, payload: payload });

export const updateTodoRequest = () => ({ type: todoActions.UPDATE_TODO_REQUEST });

export const updateTodoFailure = () => ({ type: todoActions.UPDATE_TODO_FAILURE })


export const addTodos = ({ title }) => dispatch => {
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction);
    return axios({
        url: "http://localhost:3000/todos",
        method: "POST",
        data: {
            title: title,
            completed: false
        }
    }).then((res) => {
        console.log(res);
        const todoSuccessAction = addTodoSuccess(res.data);
        dispatch(todoSuccessAction);
    }).catch((err) => {
        console.log(err);
        const todoErrorAction = addTodoFailure();
        dispatch(todoErrorAction);
    })
}

export const getTodos = () => dispatch => {
    const todoRequestAction = getTodoRequest();
    dispatch(todoRequestAction);
    axios.get("http://localhost:3000/todos")
        .then((res) => {
            console.log(res.data);
            dispatch(getTodoSuccess(res.data))
        })
        .catch((err) => {
            console.log(err);
            dispatch(getTodoFailure())
        });
}

export const updateTodo = (id, completed) => dispatch => {
    const updateTodoRequestAction = updateTodoRequest();
    dispatch(updateTodoRequestAction);
    return axios({
        url: `http://localhost:3000/todos/${id}`,
        method: "PATCH",
        data: {
            completed: !completed
        },
    }).then((res) => {
        console.log(res);
        const updateTodoSuccessAction = updateTodoSuccess(res.data);
        dispatch(updateTodoSuccessAction);
    }).catch((err) => {
        console.log(err);
        const updateTodoFailureAction = updateTodoFailure();
        dispatch(updateTodoFailureAction);
    })
}