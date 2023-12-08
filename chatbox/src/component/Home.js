import React from 'react'
import { Link } from 'react-router-dom';
import Logs from '../Redux/logs';

function Home() {
    return (
        <div className='home'>
            <Logs />
            <h1> <i className='fa-regular fa-comments fa-2xl'></i> Welcome to Instant Messaging</h1><br />
            <p>Let's connect together with live chats</p><br />
            <Link to="/chatbox">
                <i className='fa-solid fa-angles-right'></i>
            </Link>
        </div>
    )
}

export default Home;