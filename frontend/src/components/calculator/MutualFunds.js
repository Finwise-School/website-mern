import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

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

        setResult({
            investedAmount: investedAmount.toFixed(0),
            returnsGenerated: returnsGenerated.toFixed(0),
            totalAmount: totalAmount.toFixed(0),
        });
    };

    useEffect(() => {
        calculateMutualFund();
    }, [investmentMethod, monthlyInvestment, lumpSumInvestment, annualReturns, timePeriod]);

    return (
        <div style={{ marginTop: "60px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-blue-600">Mutual Funds Calculator</h1>
                    <p className="text-gray-600">Calculate your mutual funds investment returns</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="investment-method" className="text-gray-700">Investment Method</label>
                                <select
                                    id="investment-method"
                                    value={investmentMethod}
                                    onChange={(e) => setInvestmentMethod(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                >
                                    <option value="sip">SIP</option>
                                    <option value="lumpSum">Lump Sum</option>
                                </select>
                            </div>
                            {investmentMethod === 'sip' && (
                                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label htmlFor="monthly-investment" className="text-gray-700">Monthly Investment</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">&#163;</span>
                                        <input
                                            type="number"
                                            id="monthly-investment"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(e.target.value)}
                                            className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {investmentMethod === 'lumpSum' && (
                                <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label htmlFor="lump-sum-investment" className="text-gray-700">Lump Sum Investment</label>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500">&#163;</span>
                                        <input
                                            type="number"
                                            id="lump-sum-investment"
                                            value={lumpSumInvestment}
                                            onChange={(e) => setLumpSumInvestment(e.target.value)}
                                            className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="annual-returns" className="text-gray-700">Expected Annual Returns (%)</label>
                                <input
                                    type="number"
                                    id="annual-returns"
                                    value={annualReturns}
                                    onChange={(e) => setAnnualReturns(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
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
                                        <p className="text-gray-600">Invested Amount</p>
                                        <p className="text-blue-600 font-semibold text-xl">&#163;{result.investedAmount}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="text-gray-600">Returns Generated</p>
                                        <p className="text-blue-600 font-semibold text-xl">&#163;{result.returnsGenerated}</p>
                                    </div>
                                </div>
                                <div className="p-4 border border-gray-300 rounded-lg" style={{marginTop:"-130px"}}>
                                    <p className="text-gray-600">Total Amount</p>
                                    <p className="text-blue-600 font-semibold text-xl">&#163;{result.totalAmount}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-shrink-0">
                            <img src={CalculatorHome} alt="Image description" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
                        </div>
                        <p className="text-gray-600 text-center md:text-left">
                            Now that you know your mutual funds returns, Let’s maximize your investments!
                        </p>
                    </div>
                    <button className="mt-4 md:mt-0 text-white font-semibold px-4 py-2 rounded-lg finwise-bg">
                        Get started
                    </button>
                </div>

                <div className="mt-16">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Try our more Popular Calculators</h2>
            <div className="space-y-2">
                <Link to="/calculator/fixed-depo" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                    <p className="text-gray-800 font-semibold">FD Calculator</p>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                </Link>
                <Link to="/calculator/goal-sip" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                    <p className="text-gray-800">Goal SIP Calculator</p>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                </Link>
                <Link to="/calculator/mutual-funds" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                    <p className="text-blue-600">Mutual Funds Calculator</p>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                </Link>
                <Link to="/calculator/fire" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                    <p className="text-gray-800">FIRE Calculator</p>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                </Link>
            </div>
        </div>            </div>
        </div>
    );
};

export default MutualFunds;
