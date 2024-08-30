import React from "react";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { useAuth } from "./Login/AuthContext";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page
  };

  const { isAuthenticated, logout } = useAuth(); // Access auth state and logout function

  return (
    <header className="bg-white flex justify-between items-center h-24 px-12 fixed w-full top-0 z-50 shadow-md">
      <a href="/">
        <img className="h-16" src={logo} alt="Finwise School" />
      </a>

      <nav className="hidden md:flex items-center gap-12">
        <ul className="flex gap-12">
          <li>
            <a className="text-gray-700 font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-blue-500">
              <Link to="/book">Request Early Access</Link>
            </a>
          </li>
          <li>
            <a className="text-gray-700 font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-blue-500">
              <Link to="/clients">
               Our Supporters
              </Link>
            </a>
          </li>
          <li>
            <a className="text-gray-700 font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-blue-500">
              <Link to="/calculator">Utilities Calculators</Link>
            </a>
          </li>
          <li>
            <a className="text-gray-700 font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-blue-500">
              <Link to="/aboutUs">About Us</Link>
            </a>
          </li>
          <li>
            <a className="text-gray-700 font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-blue-500">
              <Link to="/faq">FAQ</Link>
            </a>
          </li>

          {/* Conditionally render Login/Signup or Logout based on authentication state */}
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-white hover:text-blue-500"
        
              >
                Logout
              </button>
              <Link className="text-gray-700 hover:text-blue-500 ml-4" to="/profile">Profile</Link>
            </li>
          ) : (
            <li>
              <a
                className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-white hover:text-blue-500"
              >
                <Link to="/login">Login/Sign Up</Link>
              </a>
            </li>
          )}
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
