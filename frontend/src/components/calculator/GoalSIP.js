import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

const GoalSIP = () => {
  const [goalAmount, setGoalAmount] = useState(100000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [result, setResult] = useState({
    monthlySIP: "0",
    totalInvested: "0",
    goalAmount: "0",
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const calculateSIP = () => {
    const FV = parseFloat(goalAmount);
    const annualReturnRate = parseFloat(annualReturn);
    const years = parseInt(investmentDuration);

    if (isNaN(FV) || isNaN(annualReturnRate) || isNaN(years)) {
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
      monthlySIP: P.toFixed(0),
      totalInvested: totalInvested.toFixed(0),
      goalAmount: FV.toFixed(0),
    });

    // Prepare chart data
    const newLabels = Array.from({ length: years }, (_, i) => i + 1);
    const investedData = newLabels.map(year => {
      const currentN = year * 12;
      const currentInvested = P * currentN;
      return currentInvested.toFixed(0);
    });

    setChartData({
      labels: newLabels,
      datasets: [
        {
          label: 'Total Invested Amount',
          data: investedData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [goalAmount, annualReturn, investmentDuration]);

  return (
    <div style={{ marginTop: "100px" }} className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold finwise-green">Goal SIP Calculator</h1>
          <p className="finwise-blue">Calculate your Systematic Investment Plan (SIP) for achieving financial goals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="goalAmount" className="text-gray-700">Goal Amount</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">&#163;</span>
                  <input
                    type="number"
                    id="goalAmount"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="annualReturn" className="text-gray-700">Expected Annual Return (%)</label>
                <input
                  type="number"
                  id="annualReturn"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="investmentDuration" className="text-gray-700">Investment Duration (Years)</label>
                <input
                  type="number"
                  id="investmentDuration"
                  value={investmentDuration}
                  onChange={(e) => setInvestmentDuration(e.target.value)}
                  className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
            </div>
          </div>
          {/* Output Fields */}
          <div className="output-fields -mt-28 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
            <div className="space-y-2">
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Monthly SIP Amount Required</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.monthlySIP}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Total Invested Amount</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.totalInvested}</p>
              </div>
              <div className="p-4 border border-gray-300 rounded-lg">
                <p className="finwise-blue">Goal Amount</p>
                <p className="finwise-green font-semibold text-xl">&#163;{result.goalAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8" style={{ marginTop: "-100px" }}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Growth Over Time</h2>
          <div className="p-4 border border-gray-300 rounded-lg">
            <Line
              data={chartData}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Years',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Amount Invested (£)',
                    },
                    ticks: {
                      callback: function (value) {
                        if (value >= 1000000) {
                          return '£' + (value / 1000000).toFixed(1) + 'M'; // For millions
                        } else if (value >= 1000) {
                          return '£' + (value / 1000).toFixed(1) + 'K'; // For thousands
                        } else {
                          return '£' + value; // For values below 1000
                        }
                      },
                    },

                  },
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        // Format tooltip label
                        if (tooltipItem.raw >= 1000000) {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${(tooltipItem.raw / 1000000).toFixed(1)}M`;
                        } else if (tooltipItem.raw >= 1000) {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${(tooltipItem.raw / 1000).toFixed(1)}K`;
                        } else {
                          return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${tooltipItem.raw}`;
                        }
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">
              <img src={CalculatorHome} alt="Calculator Home" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
            </div>
            <p className="finwise-blue text-center md:text-left">
              Now that you know your SIP amount, let’s achieve your goal!
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-white font-semibold px-4 py-2 rounded-lg finwise-green-bg">
            Get started
          </button>
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

export default GoalSIP;
