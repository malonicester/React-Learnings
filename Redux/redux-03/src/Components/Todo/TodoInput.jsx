import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, getTodos } from '../../redux/Todo/Todoaction';

const TodoInput = () => {

  const [title, setTitle] = useState('');
 
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodo({ title }, dispatch).then(() => getTodos(dispatch))
  }

  return (
    <div>
      <input type="text" placeholder='Enter Todo' onInput={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo} >ADD TODO</button>
      <h1> { } </h1>
    </div>
  )
}

export default TodoInput