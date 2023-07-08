import React, { useEffect } from 'react'
import TodoElement from './TodoElement';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, updateTodo } from '../../redux/Todo/Todoaction'

const TodoList = () => {
  const todo = useSelector(state => state.todo.todo);
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);

  const dispatch = useDispatch();

  const handleStatus = (id, completed) => {
      updateTodo({ id, completed }, dispatch)
        .then(() => getTodos(dispatch))
        .catch((error) => console.log(error));
  }

  useEffect( () => {
    getTodos(dispatch).then(()=>console.log("Rendered"))
  }, [])


  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> :
          todo?.map((item) => <TodoElement key={item.id} id={item.id} title={item.title} completed={item.completed} handleStatus={handleStatus} />)
      }
    </div>
  )
}

export default TodoList