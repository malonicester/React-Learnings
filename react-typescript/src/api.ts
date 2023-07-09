import axios,{AxiosResponse} from "axios";
interface Todo {
    id?: number,
    title: string,
    completed: boolean
}
export const postTodo = async (title: string) => {
    const newTodo: Todo = { title, completed: false };
    const response:AxiosResponse<Todo> = await axios.post('http://localhost:3001/todos', newTodo);
    console.log(response);
}