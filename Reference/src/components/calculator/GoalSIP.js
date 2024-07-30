import React, { useState } from "react";

const GoalSIP = () => {
  const [goalAmount, setGoalAmount] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const FV = parseFloat(goalAmount);
    const annualReturnRate = parseFloat(annualReturn);
    const years = parseInt(investmentDuration);

    if (isNaN(FV) || isNaN(annualReturnRate) || isNaN(years)) {
      alert("Please enter valid numbers.");
      return;
    }

    // Convert annual return to monthly return
    const r = annualReturnRate / 100 / 12;
    const n = years * 12;

    // Calculate monthly investment amount using precise formula
    const P = (FV * r) / (Math.pow(1 + r, n) - 1);

    // Calculate total invested amount
    const totalInvested = P * n;

    // Set the result
    setResult({
      monthlySIP: P.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      goalAmount: FV.toFixed(2),
    });
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center finwise-color">Goal SIP Calculator</h2>
      <form
        id="sipForm"
        onSubmit={(e) => {
          e.preventDefault();
          calculateSIP();
        }}
      >
        <div className="mb-4">
          <label htmlFor="goalAmount" className="block text-gray-700">
            Goal Amount (&pound;)
          </label>
          <input
            type="number"
            id="goalAmount"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="annualReturn" className="block text-gray-700">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            id="annualReturn"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="investmentDuration" className="block text-gray-700">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            id="investmentDuration"
            value={investmentDuration}
            onChange={(e) => setInvestmentDuration(e.target.value)}
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
          <p><strong>Monthly SIP Amount Required:</strong> &pound;{result.monthlySIP}</p>
          <p><strong>Total Invested Amount:</strong> &pound;{result.totalInvested}</p>
          <p><strong>Goal Amount:</strong> &pound;{result.goalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default GoalSIP;
