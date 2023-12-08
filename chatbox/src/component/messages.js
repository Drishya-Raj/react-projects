import React, { useState } from 'react';

function Messages() {
    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);
    const handleClick = () => {
        if (msg !== '') {
            const newMsg = { text: msg, sent: true };
            setMessages([...messages, newMsg]);
            setMsg('');
            console.log("msg===>", msg)
            console.log("messages===>", messages)
        }
    }
    return (
        <>
        <div className="msg">
            <input type="text" placeholder='Type something......' value={msg}
                onChange={(e) => setMsg(e.target.value)} />
            <button className='btn' onClick={handleClick}>Send <i class="fa-solid fa-share-from-square fa-2xl"></i></button>
            <div className="message-list">
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            <div>{message.text}</div>
                            {message?.sent ? <i class="fa-solid fa-check-double"></i> : null}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}
export default Messages;
