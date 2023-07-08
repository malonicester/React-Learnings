import { combineReducers, legacy_createStore,applyMiddleware } from 'redux';
import { TodoReducer } from './Todo/reducer';
import { CounterReducer } from './Count/reducer';
import { AuthReducer } from './Authentication/AuthReducer';

const logger = (a) => (b) => (c) =>{
    console.log(c);
}

const rootReducer = combineReducers({
    todo: TodoReducer,
    count: CounterReducer,
    authentication: AuthReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(logger));

/* The middlewares have access to 
 * store
 * dispatch
 * action
 */