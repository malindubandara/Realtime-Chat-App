import React from 'react'
import ChatLists from './ChatLists'
import InputText from './InputText'
// import '../style.css'

const ChatContainer = () => {
  return (
    <div>
      <div>
        <div className='chat-header'>
          <h4 className='chat-title'>
            Username
          </h4>
          <p className='chat-logout'>
            <strong>Logout</strong>
          </p>
        </div>
        <ChatLists />
        <InputText />
      </div>
    </div>
  )
}

export default ChatContainer