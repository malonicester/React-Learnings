import { combineReducers, legacy_createStore } from 'redux';
import { reducer } from './reducer';
import { TodoReducer } from './Todo/reducer';
const rootReducer = combineReducers({
    todo: TodoReducer
})

export const store = legacy_createStore(rootReducer);
