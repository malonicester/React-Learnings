import { AuthenticationActions } from "./AuthenticationActionType";

const initalState = {
    isAuthenticated: false,
    token: null,
    isLoading: false,
    error: false
}

export const AuthReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case AuthenticationActions.LOGIN_REQUEST: {
            return { ...state, isLoading: true, error: false };
        }
        case AuthenticationActions.LOGIN_SUCCESS: {
            return { ...state, isAuthenticated: true, isLoading: false, token: payload, error: false }
        }
        case AuthenticationActions.LOGIN_FAILURE: {
            return { ...state, isLoading: false, error: true, isAuthenticated: false }
        }
        default:
            return state;
    }
}