import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PostList from './PostList';
import { addPost } from '../redux/Posts/postSlice';
import {v4 as uuidv4} from 'uuid';
const Post = () => {
    const dispatch = useDispatch();
    const [formState, setFromState] = useState({
        id: uuidv4(),
        postTitle: '',
        postContent: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formState))
    }
    
    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Post Title</label>
                    <input type="text" onInput={(e) => setFromState({ ...formState, postTitle: e.target.value })} required placeholder='Post Title' />
                    <label htmlFor="">Post Content</label>
                    <textarea name="" onInput={(e) => setFromState({ ...formState, postContent: e.target.value })} required placeholder='Write Post Content' id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <PostList />
            </div>
        </>
    )
}

export default Post