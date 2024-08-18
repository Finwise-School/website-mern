import React from 'react';
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { logoInstagram, logoFacebook, logoTwitter } from "ionicons/icons";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-6">
        <div className="space-y-4">
          <a href="#" className="block">
            <img className="h-16 ml-4 mt-2" src={logo} alt="Finwise" />
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#">
                <IonIcon
                  className="w-6 h-6 text-gray-700 hover:text-blue-500"
                  icon={logoInstagram}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <IonIcon
                  className="w-6 h-6 text-gray-700 hover:text-blue-500"
                  icon={logoFacebook}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <IonIcon
                  className="w-6 h-6 text-gray-700 hover:text-blue-500"
                  icon={logoTwitter}
                />
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            &copy; <span className="year">2024</span> by Finwise School. All
            rights reserved.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Address</p>
          <address className="text-sm not-italic">
            Glasgow, United Kingdom
            <br />
            <a
              href="tel:+44 7741819337"
              className="text-blue-500 hover:underline"
            >
              +44 7741819337
            </a>
            <br />
            <a
              href="mailto:contact@finwiseschool.com"
              className="text-blue-500 hover:underline"
            >
              contact@finwiseschool.com
            </a>
          </address>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Account</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Create account
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Android app
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Company</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                About Finwise
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Our Supporters
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Resources</p>
          <ul className="space-y-2">
            <li>
              <a className="text-blue-500 hover:underline">
              <Link to="/calculator">
            Utilities Calculators
          </Link>
              </a>
            </li>
            <li>
              <a className="text-blue-500 hover:underline">
              <Link to="/contact">
                Help center
          </Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Privacy & terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
