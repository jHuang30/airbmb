import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout, openModal}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.lname}</p>
            <button onClick={()=>logout().then()}>Log Out</button>
        </div>
    ) : (
        <div>
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </div>
    );

    return (
        <div>{display}</div>
    );
};

export default Navbar
