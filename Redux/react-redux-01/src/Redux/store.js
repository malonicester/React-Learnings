import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./Count/reducer";
import { todoReducer } from "./Todo/reducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    counter: counterReducer,
    todoReucer: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
export default store;