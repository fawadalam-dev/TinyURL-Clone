import React from 'react';
import logo from '/mainlogo.png';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="Main-Logo" />
        <nav>
          <div>Plans</div>
          <div>Features</div>
          <div>Domains</div>
          <div>Resources</div>
        </nav>
      </div>
      <div className="right">
        <div>Login</div>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
