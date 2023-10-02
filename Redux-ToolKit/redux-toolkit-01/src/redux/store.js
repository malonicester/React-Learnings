import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './couterSlice';
import postReducer from './Posts/postSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postReducer
    }
});


