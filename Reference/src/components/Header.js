import React from "react";
import logo from "../assets/images/logo2.png";

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center h-24 px-12 fixed w-full top-0 z-50 shadow-md">
      <a href="#">
        <img className="h-16" src={logo} alt="Finwise School" />
      </a>

      <nav className="hidden md:flex items-center gap-12">
        <ul className="flex gap-12">
          <li>
            <a className="text-gray-700 hover:text-blue-500" href="#bool">
              Book a Call
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-500" href="#supp">
              Our Supporters
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-500" href="#uticalc">
              Utilities Calculators
            </a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-500" href="#about">
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-white hover:text-blue-500"
              href="#logsign"
            >
              Login / Signup
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav md:hidden flex items-center">
        <ion-icon className="text-4xl" name="menu-outline"></ion-icon>
        <ion-icon className="text-4xl hidden" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
