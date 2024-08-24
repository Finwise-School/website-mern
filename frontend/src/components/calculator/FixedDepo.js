import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FixedDepo = () => {
  const [amountInvested, setAmountInvested] = useState(100000);
  const [annualInterestRate, setAnnualInterestRate] = useState(6);
  const [fdInterestStructure, setFdInterestStructure] = useState("monthly");
  const [timePeriod, setTimePeriod] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

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

    setResult({
      totalInvestment: principal.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      maturityValue: maturityValue.toFixed(0),
    });

    // Generate data for the chart
    const labels = [];
    const data = [];
    for (let i = 1; i <= years; i++) {
      const yearlyMaturityValue = principal * Math.pow((1 + rate), i * n);
      labels.push(i);
      data.push(yearlyMaturityValue.toFixed(0));
    }

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'FD Maturity Value',
          data: data,
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    calculateFD();
  }, [amountInvested, annualInterestRate, fdInterestStructure, timePeriod]);

  return (
    <div style={{ marginTop: "60px" }} className="bg-gray-50 p-2">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-blue-600">FD Calculator</h1>
          <p className="text-gray-600">Fixed Deposit Calculator</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="amount-invested" className="text-gray-700">Amount Invested</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">&#163;</span>
                  <input
                    type="number"
                    id="amount-invested"
                    value={amountInvested}
                    onChange={(e) => setAmountInvested(e.target.value)}
                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="annual-interest-rate" className="text-gray-700">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  id="annual-interest-rate"
                  value={annualInterestRate}
                  onChange={(e) => setAnnualInterestRate(e.target.value)}
                  className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="fd-interest-structure" className="text-gray-700">FD Interest Structure</label>
                <select
                  id="fd-interest-structure"
                  value={fdInterestStructure}
                  onChange={(e) => setFdInterestStructure(e.target.value)}
                  className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <label htmlFor="time-period" className="text-gray-700">Time Period (Years)</label>
                <input
                  type="number"
                  id="time-period"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                />
              </div>
            </div>
          </div>
          {/* Output Fields */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Output:</h2>
            {result && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-600">Total Investment</p>
                    <p className="text-blue-600 font-semibold text-xl">&#163;{result.totalInvestment}</p>
                  </div>
                  <div className="p-4 border border-gray-300 rounded-lg">
                    <p className="text-gray-600 flex items-center">Total Interest Earned <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                    <p className="text-blue-600 font-semibold text-xl">&#163;{result.totalInterest}</p>
                  </div>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg" style={{ marginTop: "-130px" }}>
                  <p className="text-gray-600 flex items-center">Maturity Value <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                  <p className="text-blue-600 font-semibold text-xl">&#163;{result.maturityValue}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Line Graph */}
        <div className="mt-8" style={{ marginTop: "-100px" }}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Over Time</h2>
          <div className="bg-white p-4 border border-gray-300 rounded-lg">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        // Format tooltip label
                        return `${tooltipItem.label} year${tooltipItem.label > 1 ? 's' : ''}: £${tooltipItem.raw}`;
                      },
                      title: function () {
                        return '';
                      },
                    },
                    titleFont: {
                      size: 14,
                    },
                    bodyFont: {
                      size: 16,
                    },
                  },
                },
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
                      text: 'Amount (£)',
                    },
                    ticks: {
                      callback: function (value) {
                        return '£' + value;
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Try our more Popular Calculators</h2>
          <div className="space-y-2">
            <Link to="/calculator/fixed-depo" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p className="text-blue-600">FD Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
            <Link to="/calculator/goal-sip" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p className="text-gray-800">Goal SIP Calculator</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
            </Link>
            <Link to="/calculator/mutual-funds" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
              <p className="text-gray-800">Mutual Funds Calculator</p>
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

export default FixedDepo;