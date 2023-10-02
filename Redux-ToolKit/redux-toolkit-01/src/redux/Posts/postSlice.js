import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: "POST",
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        removePost: (state, action) => {
            return state.filter(e => {
                console.log(e.id === action.payload)
                return e.id !== action.payload
            })
        }
    }
});

export const { addPost, removePost } = postSlice.actions;
export default postSlice.reducer;