import React from 'react'

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [subscribedTo, setSubscribedTo] = useState(users[0]);
  return (
    <div>
        ChatApp
        <h1>Contacts</h1>
        <ul>
            {messages.map((message)=> <li>{message}</li> )}
        </ul>
    </div>
  )
}

export default ChatApp