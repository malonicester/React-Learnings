import { Dispatch } from 'redux';
import { Todo } from '../../Components/Todo/types/TodoTypes';
import { TodoAction, TodoActionType, TodoFailureAction, TodoRequestAction, TodoSuccessAction } from './TodoActionType';

import axios from 'axios';

const addTodoRequest = (): TodoRequestAction => ({ type: TodoActionType.ADD_TODO_REQUEST });
const addTodoSuccess = (payload: Todo[]): TodoSuccessAction => ({ type: TodoActionType.ADD_TODO_SUCCESS, payload })
const addTodoFailure = (): TodoFailureAction => ({ type: TodoActionType.ADD_TODO_FAILURE })

const getTodoRequest = (): TodoRequestAction => ({ type: TodoActionType.GET_TODO_REQUEST })
const getTodoSuccess = (payload: Todo[]): TodoSuccessAction => ({ type: TodoActionType.GET_TODO_SUCCESS, payload })
const getTodoFailure = (): TodoFailureAction => ({ type: TodoActionType.GET_TODO_FAILURE })


const updateTodoRequest = (): TodoRequestAction => ({ type: TodoActionType.UPDATE_TODO_REQUEST })
const updateTodoSuccess = (payload: Todo[]): TodoSuccessAction => ({ type: TodoActionType.UPDATE_TODO_SUCCESS, payload });
const updateTodoFailure = (): TodoFailureAction => ({ type: TodoActionType.UPDATE_TODO_FAILURE });



export const addTodo = ({ title }: { title: string }) => async (dispatch: Dispatch<TodoAction>) => {
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

export const getTodos = () => async (dispatch: Dispatch) => {
    console.log("called");
    dispatch(getTodoRequest());
    try {
        const data = await axios.get('http://localhost:3001/todos');
        console.log(data);
        dispatch(getTodoSuccess(data.data));
    } catch (error) {
        dispatch(getTodoFailure());
    }

}

export const updateTodo = ({ id, completed }: { id: number, completed: boolean }) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch(updateTodoRequest());
        await axios({
            url: `http://localhost:3001/todos/${id}`,
            method: "PATCH",
            data: {
                completed: !completed
            }
        }).then((response) => {
            dispatch(updateTodoSuccess(response.data))
        })
    }
    catch (error) {
        dispatch(updateTodoFailure());
    }
}