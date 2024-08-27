import React from 'react';
import { Link } from 'react-router-dom';
import GoalImg from "../assets/images/calci_images/goalsip.png";
import FireImg from "../assets/images/calci_images/fire.png";
import MutualImg from "../assets/images/calci_images/mutual.png";
import FDImg from "../assets/images/calci_images/fd.png";
import TaxImg from "../assets/images/calci_images/tax.png";
import BudgetImg from "../assets/images/calci_images/budget.png";
import MortgageImg from "../assets/images/calci_images/mortgage.png";
import IRRImg from "../assets/images/calci_images/irr.png";
import LoanImg from "../assets/images/calci_images/loan.png";
import EMIImg from "../assets/images/calci_images/emi.png";
import CAGRImg from "../assets/images/calci_images/cagr.png";
import RentalImg from "../assets/images/calci_images/rental.png";

const FinancialPlanningTools = () => {
  return (
    <div style={{ marginTop: "100px" }} className="w-full max-w-screen-xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-center">
        <div
          className="w-full px-4 py-10 lg:py-20 bg-gradient-to-r from-gray-500 via-gray-300 to-white text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black">Financial Planning Tools</h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg">
            Financial tools to help you manage finances ranging from Budget calculator to Investment.
          </p>
        </div>
      </div>
      <hr className="mt-10" />

      {/* Tool Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-5">
        <ToolCard title="Fixed Deposit Calculator" image={FDImg} path="/calculator/fixed-deposit" />
        <ToolCard title="SIP Calculator" image={MutualImg} path="/calculator/mutual-funds" />
        <ToolCard title="Goal SIP Calculator" image={GoalImg} path="/calculator/goal-sip" />
        <ToolCard title="F.I.R.E." image={FireImg} path="/calculator/fire" />
        <ToolCard title="Tax Calculator" image={TaxImg} path="/calculator/tax" />
        <ToolCard title="Budget Boss Calculator" image={BudgetImg} path="/calculator/budget" />
        <ToolCard title="Mortgage Calculator" image={MortgageImg} path="/calculator/mortgage" />
        <ToolCard title="IRR" image={IRRImg} path="/calculator/irr" />
        <ToolCard title="Ideal Loan Payback Period" image={LoanImg} path="/calculator/loan" />
        <ToolCard title="EMI Calculator" image={EMIImg} path="/calculator/emi" />
        <ToolCard title="CAGR" image={CAGRImg} path="/calculator/cagr" />
        <ToolCard title="Rental Yield" image={RentalImg} path="/calculator/rental" />
      </div>

      {/* Footer Section */}
      <div className="bg-white py-8 mt-6 text-center border-t border-gray-300">
        <h2 className="text-2xl font-semibold text-blue-700">Start Your Financial Journey Today</h2>
        <p className="text-gray-600 mt-4 px-4 sm:px-20 text-sm sm:text-base lg:text-lg">
          Your path to financial freedom is just a click away. Whether you're aiming
          to optimize your investments, create a solid savings plan, or receive expert financial advice. FinWise is here to
          guide you every step of the way. Take the first step towards achieving your financial goals—explore our
          innovative planning tools or connect with our team for personalized support tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-2 border border-gray-400 text-black rounded-full hover:bg-gray-100 transition">
          Request Early Access
        </button>
      </div>
    </div>
  );
};

// ToolCard Component with Links
const ToolCard = ({ title, image, path }) => {
  return (
    <Link to={path} className="bg-black text-white font-bold p-4 flex flex-col items-center rounded-lg mb-2">
      <img src={image} alt={`${title} Icon`} className="mb-2 h-20 w-20 object-contain" />
      <p className="mt-2">{title}</p>
    </Link>
  );
};

export default FinancialPlanningTools;
