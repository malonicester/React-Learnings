import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ChatPage from '../Pages/ChatPage'

const RouteComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/chats" element={<ChatPage/>} />
        </Routes>
    </div>
  )
}

export default RouteComponent