import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/calculator.css";
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
    <div style={{ marginTop: "90px" }} className="bg-gray-100 h-screen flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {/* Calculator 1: Goal SIP Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("goal-sip")}
        >
          <img
            src={GoalImg}
            alt="Goal SIP Calculator"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Goal SIP Calculator</h2>
            <p className="text-gray-600">Calculate your SIP goals and investment needs with precision.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("goal-sip")}>
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
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Mutual Funds Calculator</h2>
            <p className="text-gray-600">Optimize your mutual fund investments effectively.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("mutual-funds")}>
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
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Fixed Deposit Calculator</h2>
            <p className="text-gray-600">Calculate returns on your fixed deposits.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("fixed-deposit")}>
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
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">FIRE Calculator</h2>
            <p className="text-gray-600">Plan your Financial Independence Retire Early goals.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("fire")}>
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 5: Retirement Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("retirement")}
        >
          <img
            src="https://img.freepik.com/free-vector/indian-rupee-money-bags_23-2147990477.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
            alt="Retirement Calculator"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Retirement Calculator</h2>
            <p className="text-gray-600">Plan for your retirement and see how much 'll need to save.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("retirement")}>
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 6: Credit Card Payoff Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("credit-card-payoff")}
        >
          <img
            src="https://img.freepik.com/free-vector/indian-rupee-money-bags_23-2147990477.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
            alt="Credit Card Payoff Calculator"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Credit Calculator</h2>
            <p className="text-gray-600">Calculate the time and interest saved by paying off credit debt.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("credit-card-payoff")}>
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 7: Budget Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("budget")}
        >
          <img
            src="https://img.freepik.com/free-vector/indian-rupee-money-bags_23-2147990477.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
            alt="Budget Calculator"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Budget Calculator</h2>
            <p className="text-gray-600">Create a budget and track your stay on track financially.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("budget")}>
              Try Calculator
            </button>
          </div>
        </div>

        {/* Calculator 8: Tax Calculator */}
        <div
          className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleNavigation("tax")}
        >
          <img
            src="https://img.freepik.com/free-vector/indian-rupee-money-bags_23-2147990477.jpg?ga=GA1.1.995493188.1714908703&semt=ais_user"
            alt="Tax Calculator"
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Tax Calculator</h2>
            <p className="text-gray-600">Estimate your tax liability and see how much you can save on taxes.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => handleNavigation("tax")}>
              Try Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
