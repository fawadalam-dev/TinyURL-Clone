import React from 'react';
import './Header.css';
import logo from '/mainlogo.png';

const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="header-left">
        <img className="nav-logo" src={logo} alt="Main-Logo" />
        <div className="nav-plans">Plans</div>
        <div className="nav-features">Features</div>
        <div className="nav-domains">Domains</div>
        <div className="nav-resources">Resources</div>
      </div>

      <div className="header-right">
        <div className="nav-login">Login</div>
        <div className="nav-signup-btn">
          <button className="nav-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
