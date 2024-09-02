import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tool_Footer from './Tools_footer';
import CalculatorList from './Calulators_List';

const MutualFunds = () => {
    const [investmentMethod, setInvestmentMethod] = useState('sip');
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [lumpSumInvestment, setLumpSumInvestment] = useState(0);
    const [annualReturns, setAnnualReturns] = useState(3);
    const [timePeriod, setTimePeriod] = useState(5);
    const [result, setResult] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (investmentMethod === 'sip' && (!monthlyInvestment || isNaN(monthlyInvestment) || monthlyInvestment <= 0)) {
            newErrors.monthlyInvestment = "Please enter a valid monthly investment amount greater than zero.";
        }

        if (investmentMethod === 'lumpSum' && (!lumpSumInvestment || isNaN(lumpSumInvestment) || lumpSumInvestment <= 0)) {
            newErrors.lumpSumInvestment = "Please enter a valid lump sum investment amount greater than zero.";
        }

        if (!annualReturns || isNaN(annualReturns) || annualReturns <= 0) {
            newErrors.annualReturns = "Please enter a valid annual return percentage greater than zero.";
        }

        if (!timePeriod || isNaN(timePeriod) || timePeriod <= 0) {
            newErrors.timePeriod = "Please enter a valid time period in years greater than zero.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculateMutualFund = () => {
        if (!validateForm()) return; // Stop if the form is invalid

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
        <div style={{ marginTop: "0px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">Mutual Funds Calculator</h1>
                    <p className="finwise-blue">Calculate your mutual funds investment returns</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="investment-method" className="text-gray-700">Investment Method</label>
                                <select
                                    id="investment-method"
                                    value={investmentMethod}
                                    onChange={(e) => setInvestmentMethod(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
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
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {errors.monthlyInvestment && <p className="text-red-500 text-sm">{errors.monthlyInvestment}</p>}
                            
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
                                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                        />
                                    </div>
                                </div>
                            )}
                            {errors.lumpSumInvestment && <p className="text-red-500 text-sm">{errors.lumpSumInvestment}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="annual-returns" className="text-gray-700">Expected Annual Returns (%)</label>
                                <input
                                    type="number"
                                    id="annual-returns"
                                    value={annualReturns}
                                    onChange={(e) => setAnnualReturns(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.annualReturns && <p className="text-red-500 text-sm">{errors.annualReturns}</p>}

                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="time-period" className="text-gray-700">Time Period (Years)</label>
                                <input
                                    type="number"
                                    id="time-period"
                                    value={timePeriod}
                                    onChange={(e) => setTimePeriod(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {errors.timePeriod && <p className="text-red-500 text-sm">{errors.timePeriod}</p>}
                        </div>
                    </div>
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        {result && (
                            <div className="space-y-4">
                                <div  className="grid grid-cols-1 gap-2" style={{ "row-gap": "0.6rem" }}>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Invested Amount</p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.investedAmount}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Returns Generated</p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.returnsGenerated}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Total Amount</p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.totalAmount}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Tool_Footer message="Analyze your mutual fund investments and their potential returns. Start optimizing your investment strategy today!"/>
                <CalculatorList activeCalculator="Mutual Funds Calculator" />
            </div>
        </div>
    );
};

export default MutualFunds;
