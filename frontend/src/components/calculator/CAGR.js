import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

const CAGRCalculator = () => {
    const [buyPrice, setBuyPrice] = useState(10000.00);   // Default Buy Price
    const [sellPrice, setSellPrice] = useState(15000.00); // Default Sell Price
    const [buyDate, setBuyDate] = useState('2020-01-01'); // Default Buy Date in ISO format
    const [sellDate, setSellDate] = useState('2024-01-01'); // Default Sell Date in ISO format
    const [result, setResult] = useState({
        absoluteReturn: "0",
        cagrReturn: "0",
        percentageReturn: "0"
    });

    const calculateReturns = () => {
        const P = parseFloat(buyPrice);
        const F = parseFloat(sellPrice);
        const buyDateObj = new Date(buyDate);
        const sellDateObj = new Date(sellDate);

        // Calculate the number of years between the two dates
        const years = (sellDateObj - buyDateObj) / (1000 * 60 * 60 * 24 * 365);

        if (isNaN(P) || isNaN(F) || isNaN(years) || years <= 0) {
            return;
        }

        // Absolute Return
        const absoluteReturn = F - P;

        // Percentage Return
        const percentageReturn = (absoluteReturn / P) * 100;

        // CAGR Calculation
        const cagrReturn = (((F / P) ** (1 / years)) - 1) * 100;

        // Update the result, rounding to 2 decimal places
        setResult({
            absoluteReturn: absoluteReturn.toFixed(2),
            cagrReturn: cagrReturn.toFixed(2),
            percentageReturn: percentageReturn.toFixed(2)
        });
    };

    // Recalculate the returns whenever input values change
    useEffect(() => {
        calculateReturns();
    }, [buyPrice, sellPrice, buyDate, sellDate]);

    return (
        <div style={{ marginTop: "100px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold finwise-green">CAGR Calculator</h1>
                    <p className="finwise-blue">Calculate your absolute return and CAGR based on buy/sell price and dates</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Buy Price */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="buyPrice" className="text-gray-700">Buy Price</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="buyPrice"
                                        value={buyPrice}
                                        onChange={(e) => setBuyPrice(e.target.value)}
                                        className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="buyDate" className="text-gray-700">Buy Date</label>
                                <input
                                    type="date"
                                    id="buyDate"
                                    value={buyDate}
                                    onChange={(e) => setBuyDate(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40"
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="sellPrice" className="text-gray-700">Sell Price</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="sellPrice"
                                        value={sellPrice}
                                        onChange={(e) => setSellPrice(e.target.value)}
                                        className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="sellDate" className="text-gray-700">Sell Date</label>
                                <input
                                    type="date"
                                    id="sellDate"
                                    value={sellDate}
                                    onChange={(e) => setSellDate(e.target.value)}
                                    className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Output Fields */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">Percentage Return (%)</p>
                                <p className="finwise-green font-semibold text-xl">{result.percentageReturn}%</p>
                            </div>
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="finwise-blue">CAGR Return (%)</p>
                                <p className="finwise-green font-semibold text-xl">{result.cagrReturn}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-shrink-0">
                            <img src={CalculatorHome} alt="Image description" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
                        </div>
                        <p className="finwise-blue text-center md:text-left">
                            Now that you know your CAGR return, let's invest wisely!
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
                            <p className="text-gray-800">FD Calculator</p>
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
                            <p className="finwise-green">FIRE Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CAGRCalculator;
