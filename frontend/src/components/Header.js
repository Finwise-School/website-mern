import React from 'react';
import Logo from './Homepage/Header Files/Logo.js';
import Navigation from './Homepage/Header Files/Navigation.js';
import RequestAccessButton from './Homepage/Header Files/RequestEarlyAccess.js';

function Header() {
  return (
    <header className="flex relative justify-between items-center px-40 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <Logo />
      <h1 className="z-0 self-stretch my-auto w-[1325px] max-md:max-w-full">
        Finwise School
      </h1>
      <a
    href="#"
    className="inline-block text-[#263871] hover:text-green-500 rounded-lg py-2 text-sm lg:text-base min-w-[150px] lg:min-w-[200px] text-center transition-all duration-300 "
    style={{
      border: '5px solid',
      borderRadius: '12px',
      borderImage: 'linear-gradient(90deg, #223876 0%, #3CB371 100%) 1',
    }}
  >
    Request Early Access
  </a>
      <Navigation />
    </header>
  );
}

export default Header;