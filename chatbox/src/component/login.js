import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { setUsername } from "../Redux/action";
import { useDispatch } from "react-redux";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsernames] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {

        if (username === '') {
            alert("please enter a value");
            return;
        }
        if (password === '') {
            alert("please enter password")
            return;
        }
        if (username === '' && password === '') {
            alert("Please enter both username and password");
            return;
        }
        dispatch(setUsername(username));
        navigate('/home');
    }

    return (
        <div className="loginContainer">
            <div className="loginPage">
                <form action="" name="form1" className="form1">
                    <h1>CHAT APP   <i className='fa-regular fa-comments '></i></h1>
                    <h2>Login here...</h2>
                    <label htmlFor="uname" name="uname">Username:</label><br /><br />
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsernames(e.target.value)} /><br /><br />
                    <label htmlFor="pwd" name="pwd">Password :</label><br /><br />
                    <input type="password" placeholder="Enter ur password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <input type="button" value="LOGIN" onClick={handleClick} className="login" />
                </form>
            </div>
        </div>
    )
}
export default Login;