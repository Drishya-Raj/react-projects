import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from "./action";

const Logs = () => {

    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setUsername(username));
    },[dispatch])

    return (
        <div className="logs">
            <h2>Hello {username} !</h2>
        </div>
    )
}
export default Logs;