import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.lname}</p>
            <button onClick={()=>logout().then()}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    );

    return (
        <div>{display}</div>
    );
};

export default Navbar
