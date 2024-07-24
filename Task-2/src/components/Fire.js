import React, { useState, useEffect } from 'react';

const Fire = () => {
  const [monthlyExpense, setMonthlyExpense] = useState(10000);
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(65);
  const [inflationRate, setInflationRate] = useState(3);
  const [result, setResult] = useState(null);

  const calculateFIRE = () => {
    const monthlyExpenseValue = parseFloat(monthlyExpense);
    const currentAgeValue = parseInt(currentAge);
    const retirementAgeValue = parseInt(retirementAge);
    const inflationRateValue = parseFloat(inflationRate) / 100;

    const yearsUntilRetirement = retirementAgeValue - currentAgeValue;
    const annualExpenseToday = monthlyExpenseValue * 12;
    const futureExpense = annualExpenseToday * Math.pow(1 + inflationRateValue, yearsUntilRetirement);

    const leanFIRE = futureExpense * 20;
    const fire = futureExpense * 25;
    const fatFIRE = futureExpense * 50;

    // Set the result
    setResult({
      expenseToday: annualExpenseToday.toFixed(0),
      expenseAtRetirement: futureExpense.toFixed(0),
      leanFIRE: leanFIRE.toFixed(0),
      fire: fire.toFixed(0),
      fatFIRE: fatFIRE.toFixed(0),
    });
  };

  useEffect(() => {
    // Prefill the form with the provided values
    setMonthlyExpense(10000);
    setCurrentAge(25);
    setRetirementAge(65);
    setInflationRate(3);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center finwise-color">FIRE Calculator</h2>
      <form
        id="fireForm"
        onSubmit={(e) => {
          e.preventDefault();
          calculateFIRE();
        }}
      >
        <div className="mb-4">
          <label htmlFor="monthlyExpense" className="block text-gray-700">
            Monthly Expense (₹)
          </label>
          <input
            type="number"
            id="monthlyExpense"
            value={monthlyExpense}
            onChange={(e) => setMonthlyExpense(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currentAge" className="block text-gray-700">
            Current Age
          </label>
          <input
            type="number"
            id="currentAge"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="retirementAge" className="block text-gray-700">
            Retirement Age
          </label>
          <input
            type="number"
            id="retirementAge"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="inflationRate" className="block text-gray-700">
            Assumed Inflation Rate (%)
          </label>
          <input
            type="number"
            id="inflationRate"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
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
          <p><strong>Expense Today:</strong> ₹{result.expenseToday}</p>
          <p><strong>Expense At Retirement:</strong> ₹{result.expenseAtRetirement}</p>
          <p><strong>Lean FIRE:</strong> ₹{result.leanFIRE}</p>
          <p><strong>FIRE:</strong> ₹{result.fire}</p>
          <p><strong>Fat FIRE:</strong> ₹{result.fatFIRE}</p>
        </div>
      )}
    </div>
  );
};

export default Fire;
