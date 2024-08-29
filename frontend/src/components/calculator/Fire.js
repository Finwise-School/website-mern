import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

const Fire = () => {
    const [monthlyExpense, setMonthlyExpense] = useState(50000);
    const [currentAge, setCurrentAge] = useState(20);
    const [retirementAge, setRetirementAge] = useState(40);
    const [inflationRate, setInflationRate] = useState(10);
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

        setResult({
            expenseToday: annualExpenseToday.toFixed(0),
            expenseAtRetirement: futureExpense.toFixed(0),
            leanFIRE: leanFIRE.toFixed(0),
            fire: fire.toFixed(0),
            fatFIRE: fatFIRE.toFixed(0),
        });
    };

    useEffect(() => {
        calculateFIRE();
    }, [monthlyExpense, currentAge, retirementAge, inflationRate]);

    return (
        <div style={{ marginTop: "100px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">FIRE Calculator</h1>
                    <p className="finwise-blue">Financial Independence Retire Early Calculator</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold finwise-blue mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="monthly-expense" className="text-gray-700">Monthly Expense</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="monthly-expense"
                                        value={monthlyExpense}
                                        onChange={(e) => setMonthlyExpense(e.target.value)}
                                        className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="current-age" className="text-gray-700">Current Age</label>
                                <input
                                    type="number"
                                    id="current-age"
                                    value={currentAge}
                                    onChange={(e) => setCurrentAge(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="retirement-age" className="text-gray-700">Retirement Age</label>
                                <input
                                    type="number"
                                    id="retirement-age"
                                    value={retirementAge}
                                    onChange={(e) => setRetirementAge(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="inflation-rate" className="text-gray-700">Assumed Inflation Rate</label>
                                <input
                                    type="number"
                                    id="inflation-rate"
                                    value={inflationRate}
                                    onChange={(e) => setInflationRate(e.target.value)}
                                    className="bg-green-100 finwise-blue font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Output Fields */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold finwise-blue mb-4">Results:</h2>
                        {result && (
                            <div className="space-y-2">
                                <div className="grid grid-cols-1 gap-2" style={{ "row-gap": "0.6rem" }}>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue">Expense Today</p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.expenseToday}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">Expense at {retirementAge} <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.expenseAtRetirement}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">Lean FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.leanFIRE}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.fire}</p>
                                    </div>
                                    <div className="p-4 border border-gray-300 rounded-lg">
                                        <p className="finwise-blue flex items-center">FAT FIRE <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400 ml-2" /></p>
                                        <p className="finwise-green font-semibold text-xl">&#163;{result.fatFIRE}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center" style={{ "marginTop": "-124px" }}>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-shrink-0">
                            <img src={CalculatorHome} alt="Image description" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
                        </div>
                        <p className="finwise-blue text-center md:text-left">
                            Now that you know your FIRE number, Lets achieve it !!
                        </p>
                    </div>
                    <button className="mt-4 md:mt-0 text-white font-semibold px-4 py-2 rounded-lg finwise-green-bg">
                        Get started
                    </button>
                </div>

                <div className="mt-16">
                    <h2 className="text-lg font-semibold finwise-blue mb-4">Try our more Popular Calculators</h2>
                    <div className="space-y-2">
                        <Link to="/calculator/fixed-depo" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <p className="finwise-blue">FD Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                        <Link to="/calculator/goal-sip" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <p className="finwise-blue">Goal SIP Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                        <Link to="/calculator/mutual-funds" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <p className="finwise-blue">Mutual Funds Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                        <Link to="/calculator/fire" className="flex justify-between items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <p className="finwise-green">FIRE Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fire;
