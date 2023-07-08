import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, updateTodo } from '../Redux/Todo/action';
import TodoItem from './TodoItem';

const TodoList = () => {

    const { todos, loading, error } = useSelector((state) => ({
        todos: state.todo,
        loading: state.loading,
        error: state.error
    }));

    const dispatch = useDispatch();

    const toggleStatusHandler = (id, completed) => {
        dispatch(updateTodo(id, completed)).
            then(() => dispatch(getTodos())).
            catch(err => console.log(err))
    }

    useEffect(() => {
        dispatch(getTodos());
    }, []);
    console.log(todos,loading,error);
    return (
        <div>
            <h1>Todos</h1>
            {
                loading ? <h1>Loading...</h1> : error ? <h1>Somthing went wrong...</h1> : todos.map((item) => <TodoItem id={item.id} toggleStatusHandler={toggleStatusHandler} key={item.id} completed={item.completed} title={item.title} />)
            }
        </div>
    )
}

export default TodoList