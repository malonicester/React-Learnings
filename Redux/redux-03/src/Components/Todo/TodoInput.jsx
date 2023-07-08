import { useState } from 'react';
import { addTodo } from '../../redux/Todo/Todoaction';
import { useDispatch } from 'react-redux';

const TodoInput = () => {

  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodo({ title }, dispatch);
  }

  return (
    <div>
      <input type="text" placeholder='Enter Todo' onInput={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo} >ADD TODO</button>
    </div>
  )
}

export default TodoInput