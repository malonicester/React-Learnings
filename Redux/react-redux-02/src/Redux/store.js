import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './Todo/reducer';

const rootReducer = combineReducers({
    todo: todoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;