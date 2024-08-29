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
      <RequestAccessButton />
      <Navigation />
    </header>
  );
}

export default Header;