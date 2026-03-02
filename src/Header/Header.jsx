import React from 'react';
import logo from '/mainlogo.png';

const Header = () => {
  return (
    <nav className="sticky top-0 w-full h-[65px] bg-gradient-to-r from-[#21b5e2] to-[#012543] flex items-center justify-between">
      <div className="flex items-center pl-[5.5rem]">
        <img className="h-[50px] w-[160px] pr-5" src={logo} alt="Main-Logo" />
        <div className="text-white text-base px-8 py-2">Plans</div>
        <div className="text-white text-base px-8 py-2">Features</div>
        <div className="text-white text-base px-8 py-2">Domains</div>
        <div className="text-white text-base px-8 py-2">Resources</div>
      </div>

      <div className="flex items-center absolute right-[8rem]">
        <div className="text-white text-base">Login</div>
        <div>
          <button className="bg-[#0d7693] text-white rounded px-6 py-2 m-4 h-[40px] w-[100px] hover:scale-105 transition-transform duration-300">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
