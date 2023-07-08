import React, { useEffect } from 'react'
import axios from 'axios';
const ChatPage = () => {
    const fetchChats = async () => {
        const data = await axios("http://locahost:4000/api/chat");
        console.log(data)
    }

    useEffect(()=>{
        fetchChats();
    })
    return (
        <div>ChatPage</div>
    )
}

export default ChatPage