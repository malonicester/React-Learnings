import { TodoActions } from "./actionType";

import axios from 'axios';

const addTodoRequest = () => ({ type: TodoActions.ADD_TODO_REQUEST });
const addTodoSuccess = (payload) => ({ type: TodoActions.ADD_TODO_SUCCESS, payload })
const addTodoFailure = () => ({ type: TodoActions.ADD_TODO_FAILURE })

const getTodoRequest = () => ({ type: TodoActions.GET_TODO_REQUEST })
const getTodoSuccess = (payload) => ({ type: TodoActions.GET_TODO_SUCCESS, payload })
const getTodoFailure = () => ({ type: TodoActions.GET_TODO_FAILURE })


const updateTodoRequest = () => ({ type: TodoActions.UPDATE_TODO_REQUEST })
const updateTodoSuccess = (payload) => ({ type: TodoActions.UPDATE_TODO_SUCCESS, payload });
const updateTodoFailure = () => ({ type: TodoActions.UPDATE_TODO_FAILURE });



export const addTodo = async ({ title }, dispatch) => {
    try {
        dispatch(addTodoRequest());
        const response = await axios({
            url: "http://localhost:3001/todos",
            method: "POST",
            data: {
                title,
                completed: false
            }
        });
        const data = await response.data;
        dispatch(addTodoSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(addTodoFailure());
    }
}

export const getTodos = async (dispatch) => {
    try {
        dispatch(getTodoRequest());
        return await axios.get('http://localhost:3001/todos')
            .then((data) => {
                console.log()
                dispatch(getTodoSuccess(data.data));
            });
    } catch (error) {
        console.log(error)
        dispatch(getTodoFailure());
    }
}

export const updateTodo = async ({ id, completed }, dispatch) => {
    try {
        dispatch(updateTodoRequest());
        return await axios({
            url: `http://localhost:3001/todos/${id}`,
            method: "PATCH",
            data: {
                completed: !completed
            }
        }).then((response)=>{
            dispatch(updateTodoSuccess(response.data))
        })
    }
    catch (error) {
        dispatch(updateTodoFailure());
    }
}