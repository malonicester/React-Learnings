import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginHandler } from '../redux/Authentication/AuthenticationActions';
export const Login = () => {
    const [formData, setformData] = useState({
        email: null,
        password: null
    })
    const { isAuthenticated, token, isLoading, error } = useSelector(state => ({
        isAuthenticated: state.authentication.isAuthenticated,
        token: state.authentication.token,
        isLoading: state.authentication.isLoading,
        error: state.authentication.error
      }))
    const dispatch = useDispatch();

    const handleLogin = () => {
        loginHandler(formData, dispatch);
    }
    console.log(isAuthenticated,token,isLoading,error)
    return (
        <div>
            <input type="text" required onInput={(e) => setformData({ ...formData, email: e.target.value })} name="" placeholder='Enter email' id="" />
            <input type="text" required name="" onInput={(e) => setformData({ ...formData, password: e.target.value })} placeholder='Enter password' id="" />
            <button onClick={handleLogin} >Login</button>
            <h2> {isAuthenticated ? "Loggedin":"Login First"} </h2>
        </div>
    )
}
