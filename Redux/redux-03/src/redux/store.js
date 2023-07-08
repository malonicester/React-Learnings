import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import { TodoReducer } from './Todo/reducer';
import { CounterReducer } from './Count/reducer';
import { AuthReducer } from './Authentication/AuthReducer';
import thunk from 'redux-thunk';
// const logger = (a) => (b) => (c) => {
//     console.log(c);
// }
const myMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'function') {
        console.log(action)
        return action(dispatch);
    }
    return dispatch(action);
}
const rootReducer = combineReducers({
    todo: TodoReducer,
    count: CounterReducer,
    authentication: AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(myMiddleware));

/* The middlewares have access to 
 * store
 * dispatch
 * action
 */