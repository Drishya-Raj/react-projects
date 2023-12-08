import React from 'react'
import Chats from './chat'
import Messages from './messages';
import Navbar from './navbar';



function Chatbox() {

  return (
    <>
      <Navbar />
      <div className='chatbox'>
        <Chats />
        <Messages />
      </div>
    </>
  )
}
export default Chatbox;