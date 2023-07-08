import axios from 'axios';
import { AuthenticationActions } from './AuthenticationActionType';

const authenticationRequest = () => ({ type: AuthenticationActions.LOGIN_REQUEST })
const authenticationSuccess = (payload) => ({ type: AuthenticationActions.LOGIN_SUCCESS, payload })
const authenticationFailure = () => ({ type: AuthenticationActions.LOGIN_FAILURE })


export const loginHandler = async ({ email, password }, dispatch) => {
    try {
        dispatch(authenticationRequest());
        const response = await axios({
            url: 'https://reqres.in/api/login',
            method: "POST",
            data: {
                email, password
            }
        });
        console.log(response.data.token)
        dispatch(authenticationSuccess(response.data.token)) ;
    } catch (error) {
        console.log(error);
        dispatch(authenticationFailure())
    }
}