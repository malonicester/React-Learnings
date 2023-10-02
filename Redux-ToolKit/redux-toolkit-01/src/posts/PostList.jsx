import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePost } from '../redux/Posts/postSlice';

const PostList = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const postDeleteHandler = (id) => {
        dispatch(removePost(id));
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
            {
                posts?.map(e => {
                    return <div key={e.id}>
                        <h1>{e.postTitle}</h1>
                        <p>{e.postContent.substring(0, 100)}</p>
                        <button onClick={() => postDeleteHandler(e.id)}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default PostList