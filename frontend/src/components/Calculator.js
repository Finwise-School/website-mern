import React from "react";
import { useNavigate } from "react-router-dom";
import GoalImg from "../assets/images/calci_images/goalsip.png";
import FireImg from "../assets/images/calci_images/fire.png";
import MutualImg from "../assets/images/calci_images/mutal.png";
import FDImg from "../assets/images/calci_images/fd.png";

const Calculator = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/calculator/${path}`);
  };

  return (
    <div style={{ marginTop: "90px" }} className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-5 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-screen-xl mx-auto">
        {/* Calculator 1: Goal SIP Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("goal-sip")}
        >
          <img
            src={GoalImg}
            alt="Goal SIP Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Goal SIP Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Calculate your SIP goals and investment needs with precision.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("goal-sip")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 2: Mutual Funds Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("mutual-funds")}
        >
          <img
            src={MutualImg}
            alt="Mutual Funds Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Mutual Funds Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Optimize your mutual fund investments effectively.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("mutual-funds")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 3: Fixed Deposit Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fixed-depo")}
        >
          <img
            src={FDImg}
            alt="Fixed Deposit Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Fixed Deposit Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Calculate returns on your fixed deposits.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fixed-deposit")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 4: FIRE Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fire")}
        >
          <img
            src={FireImg}
            alt="FIRE Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              FIRE Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Plan your Financial Independence Retire Early goals.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fire")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 4: FIRE Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fire")}
        >
          <img
            src={FireImg}
            alt="FIRE Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              FIRE Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Plan your Financial Independence Retire Early goals.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fire")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 4: FIRE Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fire")}
        >
          <img
            src={FireImg}
            alt="FIRE Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              FIRE Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Plan your Financial Independence Retire Early goals.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fire")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 4: FIRE Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fire")}
        >
          <img
            src={FireImg}
            alt="FIRE Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              FIRE Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Plan your Financial Independence Retire Early goals.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fire")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 4: FIRE Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("fire")}
        >
          <img
            src={FireImg}
            alt="FIRE Calculator"
            className="w-full h-36 md:h-40 object-cover"
          />
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              FIRE Calculator
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Plan your Financial Independence Retire Early goals.
            </p>
            <button
              className="mt-3 md:mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => handleNavigation("fire")}
            >
              Try Calculator
            </button>
          </div>
        </div>

        {/* Additional Calculators ... */}
      </div>
    </div>
  );
};

export default Calculator;
