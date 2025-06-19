import React from 'react'
import '../style.css'

const ChatLists = () => {

    function SenderChat(){
        return(
            <div className='sender-chat'>
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <p>
                    <strong>Banda</strong><br />
                    message from sender
                </p>
            </div> 
        )
    }
    function ReceiverChat(){
        return(
            <div className='receiver-chat'>
                <img src="https://picsum.photos/id/237/200/300" alt="" />
                <p>
                    <strong>Naruto</strong><br />
                    message from receiver
                </p>
            </div>
        )
    }
  return (
    <div>
        <SenderChat />
        <ReceiverChat />
    </div>
  )
}

export default ChatLists