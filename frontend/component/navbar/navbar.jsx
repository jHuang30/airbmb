import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <button className="logout-info-button" onClick={() => logout()}>
        {" "}
        Log Out
      </button>
      <button className="logout-info-button" onClick={() => openModal("about")}>
        Contact Info
      </button>
    </div> 
  ) : (
    <div className="navbar">
      <button className="navbut" onClick={() => openModal("login")}>
        Login
      </button>
      <button className="navbut" onClick={() => openModal("signup")}>
        Signup
      </button>
      <button className="navbut" onClick={() => openModal("about")}>
        Contact Info
      </button>
    </div>
  );

  return (
    <div className="nav-container">
      <h1 className="logo">
        <Link to="/">Airbmb</Link>
      </h1>
      {display}
    </div>
  );
};

export default Navbar;
