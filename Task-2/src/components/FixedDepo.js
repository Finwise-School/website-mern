import React, { useState } from 'react';

const FixedDepo = () => {
  const [amountInvested, setAmountInvested] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [fdInterestStructure, setFdInterestStructure] = useState("monthly");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculateFD = () => {
    const principal = parseFloat(amountInvested);
    const annualRate = parseFloat(annualInterestRate);
    const interestStructure = fdInterestStructure;
    const years = parseInt(timePeriod);

    let n;
    if (interestStructure === 'monthly') {
      n = 12;
    } else if (interestStructure === 'quarterly') {
      n = 4;
    } else if (interestStructure === 'half-yearly') {
      n = 2;
    } else if (interestStructure === 'yearly') {
      n = 1;
    }

    const rate = annualRate / 100 / n;
    const time = years * n;

    const maturityValue = principal * Math.pow((1 + rate), time);
    const totalInterest = maturityValue - principal;

    // Set the result
    setResult({
      totalInvestment: principal.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      maturityValue: maturityValue.toFixed(0),
    });
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center finwise-color">FD Calculator</h2>
      <form
        id="fdForm"
        onSubmit={(e) => {
          e.preventDefault();
          calculateFD();
        }}
      >
        <div className="mb-4">
          <label htmlFor="amountInvested" className="block text-gray-700">
            Amount Invested (₹)
          </label>
          <input
            type="number"
            id="amountInvested"
            value={amountInvested}
            onChange={(e) => setAmountInvested(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="annualInterestRate" className="block text-gray-700">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            id="annualInterestRate"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fdInterestStructure" className="block text-gray-700">
            FD Interest Structure
          </label>
          <select
            id="fdInterestStructure"
            value={fdInterestStructure}
            onChange={(e) => setFdInterestStructure(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="half-yearly">Half-Yearly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="timePeriod" className="block text-gray-700">
            Time Period (Years)
          </label>
          <input
            type="number"
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          Calculate
        </button>
      </form>
      {result && (
        <div id="result" className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
          <p><strong>Total Investment:</strong> ₹{result.totalInvestment}</p>
          <p><strong>Total Interest Earned:</strong> ₹{result.totalInterest}</p>
          <p><strong>Maturity Value:</strong> ₹{result.maturityValue}</p>
        </div>
      )}
    </div>
  );
};

export default FixedDepo;
