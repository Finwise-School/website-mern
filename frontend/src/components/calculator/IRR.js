import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { irr } from 'node-irr'; // Import the irr function

const IRRCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [cashFlows, setCashFlows] = useState([1000, 1500, 2000, 2500]); // Example cash flows
  const [irrResult, setIrrResult] = useState('0.00');
  const [grossReturn, setGrossReturn] = useState('0.00');
  const [returnAboveInvestment, setReturnAboveInvestment] = useState('0.00');

  const calculateIRRResult = () => {
    // Calculate IRR using the irr function
    const adjustedCashFlows = [ -initialInvestment, ...cashFlows ];
    const calculatedIRR = irr(adjustedCashFlows);
    setIrrResult(isNaN(calculatedIRR) ? 'N/A' : (calculatedIRR * 100).toFixed(2));

    // Calculate Gross Return and Return Above Investment
    const totalCashFlows = cashFlows.reduce((sum, flow) => sum + flow, 0);
    // const calculatedGrossReturn = (totalCashFlows - Math.abs(initialInvestment)) / Math.abs(initialInvestment) * 100;
    const calculatedGrossReturn = ((totalCashFlows - Math.abs(initialInvestment)) / Math.abs(initialInvestment) * 100).toFixed(2);
    

    const calculatedReturnAboveInvestment = (totalCashFlows - Math.abs(initialInvestment)).toFixed(2);

    setGrossReturn(calculatedGrossReturn);
    setReturnAboveInvestment(calculatedReturnAboveInvestment);
  };

  useEffect(() => {
    calculateIRRResult();
  }, [initialInvestment, cashFlows]);

  const handleCashFlowChange = (index, value) => {
    const updatedCashFlows = [...cashFlows];
    updatedCashFlows[index] = parseFloat(value) || 0;
    setCashFlows(updatedCashFlows);
  };

  const addCashFlow = () => {
    setCashFlows([...cashFlows, 0]);
  };

  const removeCashFlow = (index) => {
    const updatedCashFlows = cashFlows.filter((_, i) => i !== index);
    setCashFlows(updatedCashFlows);
  };

  return (
    <div style={{ marginTop: "100px" }} className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">IRR Calculator</h1>
          <p className="finwise-blue">Calculate the Internal Rate of Return for your investment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="initialInvestment" className="text-gray-700">Initial Investment</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">&#163;</span>
                  <input
                    type="number"
                    id="initialInvestment"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(parseFloat(e.target.value) || 0)}
                    className="bg-gray-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>

              {cashFlows.map((cashFlow, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <label className="text-gray-700">Year {index + 1} Cash Flow</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">&#163;</span>
                    <input
                      type="number"
                      value={cashFlow}
                      onChange={(e) => handleCashFlowChange(index, e.target.value)}
                      className="bg-gray-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                    />
                    <button onClick={() => removeCashFlow(index)} className="text-red-500">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={addCashFlow}
                className="text-white font-semibold px-4 py-2 rounded-lg finwise-green-bg">
                Add Cash Flow <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          
          <div className="output-fields -mt-28 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
            <div className="space-y-2">
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">IRR</p>
                <p className="finwise-green font-semibold text-xl">{irrResult}%</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Gross Return</p>
                <p className="finwise-green font-semibold text-xl">{grossReturn}%</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Return Above Investment</p>
                <p className="finwise-green font-semibold text-xl">&#163;{returnAboveInvestment}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Try our more Popular Calculators</h2>
          <div className="space-y-2">
            <Link to="/calculator/fixed-depo" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p>FD Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
            <Link to="/calculator/goal-sip" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p className="finwise-green">Goal SIP Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
            <Link to="/calculator/mutual-funds" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p>Mutual Funds Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
            <Link to="/calculator/fire" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p>FIRE Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRRCalculator;
