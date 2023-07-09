import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { TodoReducer } from "./Todo/TodoReducer";
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   todo:TodoReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

