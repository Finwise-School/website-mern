import React from "react";
import Video from "./video";
import { FaLightbulb } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-extrabold text-8xl text-blue-900">WELCOME TO</h1>
          <h1 className="font-extrabold text-8xl text-blue-900 mt-4">
            FINWISE SCHOOL
          </h1>
        </div>
      </div>

      <div className="min-h-screen  h-80 relative">
        <Video />
      </div>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
        <h1 className="font-extrabold text-8xl text-blue-900 mb-9">
          Company Overview
        </h1>
        <p className=" font-medium leading-relaxed max-w-3xl text-xl ">
          At FinwiseSchool we understand that everyone learns differently, so we
          offer personalized learning paths tailored to each user's unique
          financial knowledge, learning style, and goals. When users join, they
          complete a short assessment to gauge their current financial
          understanding and set personal financial goals. Our advanced
          algorithms then customize the learning experience based on the user's
          progress and performance, ensuring that each lesson is relevant and
          appropriately challenging.
        </p>
      </div>

      <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center ">
        <div className=" flex">
          <h2 className="font-extrabold text-8xl text-white mb-9">
            Our Mission
          </h2>
          <FaLightbulb className=" size-24 fill-white" />
        </div>
        <p className="font-medium leading-relaxed max-w-3xl text-xl text-white ">
          Our mission is to empower individuals with the knowledge and skills
          necessary to make informed financial decisions, fostering a future of
          financial independence and security. At Finewise, we bwlieve that
          financial education is a fundamental right and a cornerstone of
          personal and societal well-being
        </p>
      </div>

      <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      <div className=" flex">
               
                <h2 className=" font-extrabold text-8xl mb-9 text-blue-900">Our Vision</h2>
                <FaPersonChalkboard  className=" size-24 fill-blue-900" />
              </div>
              <p className="font-medium leading-relaxed max-w-3xl text-xl">
                We envision a financially literate generation that confidently
                navigates their financial futures. Finewise School strives to be
                the leading platform in financial education for GenZ,
                transforming financial literacy through innovative and rewarding
                learning experiences{" "}
              </p>

      </div>

    </div>
  );
};

export default AboutUs;
