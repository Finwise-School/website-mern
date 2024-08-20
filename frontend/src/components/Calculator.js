import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/calculator.css";

const Calculator = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/calculator/${path}`);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Financial Utilities Calculator</h1>
      <div className="w-full max-w-6xl p-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleNavigation("goal-sip")}
          >
            <img
              src="https://img.freepik.com/free-vector/indian-rupee-investment-concept_23-2147998468.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
              alt="Goal SIP Calculator"
              className="w-24 h-24 mb-4 rounded-full border border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2 finwise-color">Goal SIP Calculator</h3>
            <p className="text-gray-600">Calculate your SIP goals and investment needs with precision.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleNavigation("mutual-funds")}
          >
            <img
              src="https://img.freepik.com/free-vector/indian-rupee-tree_23-2147990480.jpg?t=st=1721834717~exp=1721838317~hmac=c7ad7d9618567a7c4b73742cb4bb4ba6bf404403a5d5acf8ac37c900d7e6ffe6&w=740"
              alt="Mutual Funds Calculator"
              className="w-24 h-24 mb-4 rounded-full border border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2 finwise-color">Mutual Funds Calculator</h3>
            <p className="text-gray-600">Optimize your mutual fund investments effectively.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleNavigation("fixed-depo")}
          >
            <img
              src="https://img.freepik.com/free-vector/indian-rupee-money-bags_23-2147990477.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
              alt="Fixed Deposit Calculator"
              className="w-24 h-24 mb-4 rounded-full border border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2 finwise-color">Fixed Deposit Calculator</h3>
            <p className="text-gray-600">Calculate returns on your fixed deposits.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleNavigation("fire")}
          >
            <img
              src="https://img.freepik.com/free-vector/pension-plan-concept-illustration_114360-19813.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user150"
              alt="FIRE Calculator"
              className="w-24 h-24 mb-4 rounded-full border border-gray-200"
            />
            <h3 className="text-xl font-semibold mb-2 finwise-color">FIRE Calculator</h3>
            <p className="text-gray-600">Plan your financial independence and early retirement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
