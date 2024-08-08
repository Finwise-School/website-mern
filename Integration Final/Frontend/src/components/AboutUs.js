import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import AboutUSS from "../assets/images/aboutUS/About.png"

const AboutUS = () => {
  return (
    
    <div className=" bg-white ">
      
      <div className='Navbar flex space-x-96  justify-around container  mb-14 mt-28'>
        
        <div className=' flex space-x-8  pr-44 '>
          
          <a href="/">
        <img className=" h-10" src={logo} alt="Finwise School" />
           </a>
        </div>

        <div className='' >
            <ul className=' flex space-x-10 ' >
            <li><a href="./aboutUs" className=" font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-orange-500">Home</a></li>
            <li><a href="./aboutUs" className=" font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-orange-500">Problem</a></li>
            <li><a href="./aboutUs" className=" font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-orange-500">About Us</a></li>
            <li><a href="./aboutUs" className=" font-medium relative after:absolute after:py-0.5 after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-transparent after:transition-all after:duration-300 after:content-[''] hover:after:bg-orange-500">Solution</a></li>
            </ul>
        </div>
        
    </div>

      <div className=" columns-2 container ">
        <div>
          <img
          src={AboutUSS}
          alt="abouUSImage"
          className=" h-50"
          />
          <h1 className=" font-extrabold text-8xl text-orange-500 mt-14 mb-48">About Us</h1>
        </div>

        <div className="textual-data">
          <div>
            <h2 className=" font-bold text-2xl">Company Overview</h2>
            <p>
              At FinewiseSchool we understand that everyone learns difeerently,
              so we offer personalized learning paths tailored to each user's
              unique financial knowledge, learning style, and goals. When users
              join, they complete a short assessment to guage their current
              financial understanding and set personal financial goals. Our
              advanced algorithms then customize the learning experience based
              on the user's progress and performance, ensuring that each lesson
              is relevant and appropriately challenging.
            </p>
          </div>

          <div className=" columns-2 mt-10">
            <div>
              <div>
                <FaLightbulb className=" size-10" />
                <h2 className=" font-bold text-2xl">Our Mission</h2>
              </div>
              <p>
                Our mission is to empower individuals with the knowledge and
                skills necessary to make informed financial decisions, fostering
                a future of financial independence and security. At Finewise, we
                bwlieve that financial education is a fundamental right and a
                cornerstone of personal and societal well-being
              </p>
            </div>

            <div>
              <div>
                <FaPersonChalkboard  className=" size-10" />
                <h2 className=" font-bold text-2xl ">Our Vision</h2>
              </div>
              <p className=" text-left">
                We envision a financially literate generation that confidently
                navigates their financial futures. Finewise School strives to be
                the leading platform in financial education for GenZ,
                transforming financial literacy through innovative and rewarding
                learning experiences{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
