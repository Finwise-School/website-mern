import React, { useState, useEffect } from 'react';

const MutualFunds = () => {
  const [investmentMethod, setInvestmentMethod] = useState('sip');
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [lumpSumInvestment, setLumpSumInvestment] = useState(0);
  const [annualReturns, setAnnualReturns] = useState(3);
  const [timePeriod, setTimePeriod] = useState(5);
  const [result, setResult] = useState(null);

  const calculateMutualFund = () => {
    const annualReturnsValue = parseFloat(annualReturns);
    const years = parseInt(timePeriod);

    let investedAmount = 0;
    let totalAmount = 0;

    if (investmentMethod === 'sip') {
      const monthlyInvestmentValue = parseFloat(monthlyInvestment);
      const r = annualReturnsValue / 100 / 12; // Monthly interest rate
      const n = years * 12; // Total number of investments

      totalAmount = monthlyInvestmentValue * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      investedAmount = monthlyInvestmentValue * n;
    } else if (investmentMethod === 'lumpSum') {
      const lumpSumInvestmentValue = parseFloat(lumpSumInvestment);
      const r = annualReturnsValue / 100;
      const n = years;

      totalAmount = lumpSumInvestmentValue * Math.pow(1 + r, n);
      investedAmount = lumpSumInvestmentValue;
    }

    // Adjust for more accurate results
    totalAmount = parseFloat(totalAmount.toFixed(2));
    investedAmount = parseFloat(investedAmount.toFixed(2));

    const returnsGenerated = totalAmount - investedAmount;

    // Set the result
    setResult({
      investedAmount: investedAmount.toFixed(0),
      returnsGenerated: returnsGenerated.toFixed(0),
      totalAmount: totalAmount.toFixed(0),
    });
  };

  useEffect(() => {
    // Prefill the form with the provided values
    setMonthlyInvestment(5000);
    setLumpSumInvestment(0);
    setAnnualReturns(3);
    setTimePeriod(5);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center finwise-color">Mutual Funds Calculator</h2>
      <form
        id="mfForm"
        onSubmit={(e) => {
          e.preventDefault();
          calculateMutualFund();
        }}
        className="space-y-4"
      >
        <div className="mb-4">
          <label htmlFor="investmentMethod" className="block text-gray-700 text-sm sm:text-base">Investment Method</label>
          <select
            id="investmentMethod"
            value={investmentMethod}
            onChange={(e) => setInvestmentMethod(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm sm:text-base"
            required
          >
            <option value="sip">SIP</option>
            <option value="lumpSum">Lump Sum</option>
          </select>
        </div>
        {investmentMethod === 'sip' && (
          <div id="sipFields" className="mb-4">
            <label htmlFor="monthlyInvestment" className="block text-gray-700 text-sm sm:text-base">Monthly Investment (₹)</label>
            <input
              type="number"
              id="monthlyInvestment"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm sm:text-base"
            />
          </div>
        )}
        {investmentMethod === 'lumpSum' && (
          <div id="lumpSumField" className="mb-4">
            <label htmlFor="lumpSumInvestment" className="block text-gray-700 text-sm sm:text-base">Lump Sum Investment (₹)</label>
            <input
              type="number"
              id="lumpSumInvestment"
              value={lumpSumInvestment}
              onChange={(e) => setLumpSumInvestment(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm sm:text-base"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="annualReturns" className="block text-gray-700 text-sm sm:text-base">Expected Annual Returns (%)</label>
          <input
            type="number"
            id="annualReturns"
            value={annualReturns}
            onChange={(e) => setAnnualReturns(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm sm:text-base"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="timePeriod" className="block text-gray-700 text-sm sm:text-base">Time Period (Years)</label>
          <input
            type="number"
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm sm:text-base"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg text-sm sm:text-base"
        >
          Calculate
        </button>
      </form>
      {result && (
        <div id="result" className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm sm:text-base">
          <p><strong>Invested Amount:</strong> ₹{result.investedAmount}</p>
          <p><strong>Returns Generated:</strong> ₹{result.returnsGenerated}</p>
          <p><strong>Total Amount:</strong> ₹{result.totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default MutualFunds;
