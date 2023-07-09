import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../../redux/Todo/TodoActions';
import { TodoInitialState } from '../../redux/Todo/TodoReducer';
import { AppDispatch, State } from '../../redux/store';
import TodoItem from './TodoItem';
const TodoList = () => {
  const {todo,loading,error} = useSelector((state:State):TodoInitialState =>{return state.todo})
  const dispatch = useDispatch();
  const handleStatus = (id:number,completed:boolean) => {
    dispatch(updateTodo({id,completed}));
  }
  return (
    <div>
      {
        loading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> : 
        todo?.map((item)=> <TodoItem handleStatus={handleStatus} id={item.id} completed={item.completed}  key={item.id} title={item.title} />)
      }
    </div>
  )
}

export default TodoList