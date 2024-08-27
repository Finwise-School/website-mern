import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CalculatorHome from "../../assets/images/calculator_home.png";
import { Link } from 'react-router-dom';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(10000.00);  // Default Loan Amount
    const [interestRate, setInterestRate] = useState(12.75); // Default Annual Interest Rate
    const [termLength, setTermLength] = useState(9);         // Default Term in Years
    const [firstPaymentDate, setFirstPaymentDate] = useState('01-01-2024'); // Default First Payment Date
    const [compoundPeriod, setCompoundPeriod] = useState('Monthly'); // Default Compound Period
    const [paymentFrequency, setPaymentFrequency] = useState('Bi-Weekly'); // Default Payment Frequency
    const [result, setResult] = useState({
        payment: "0",
    });

    // Helper function to get payment details
    const getPaymentDetails = (frequency) => {
        switch (frequency) {
            case 'Monthly':
                return { periodsPerYear: 12, compoundingPeriodsPerYear: 12 };
            case 'Semi-Monthly':
                return { periodsPerYear: 24, compoundingPeriodsPerYear: 24 };
            case 'Bi-Weekly':
                return { periodsPerYear: 26, compoundingPeriodsPerYear: 26 };
            case 'Weekly':
                return { periodsPerYear: 52, compoundingPeriodsPerYear: 52 };
            default:
                return { periodsPerYear: 12, compoundingPeriodsPerYear: 12 };
        }
    };

    // Helper function to get compounding periods per year
    const getCompoundingPeriodsPerYear = (period) => {
        switch (period) {
            case 'Monthly':
                return 12;
            case 'Semi-Annually':
                return 2;
            default:
                return 12; // Default to Monthly if invalid value
        }
    };

    const calculatePayment = () => {
        const P = parseFloat(loanAmount);
        const annualInterestRate = parseFloat(interestRate);
        const years = parseInt(termLength);

        if (isNaN(P) || isNaN(annualInterestRate) || isNaN(years)) {
            return;
        }

        const { periodsPerYear } = getPaymentDetails(paymentFrequency);
        const compoundingPeriodsPerYear = getCompoundingPeriodsPerYear(compoundPeriod);
        const totalPayments = years * periodsPerYear;
        const annualRate = annualInterestRate / 100;
        const periodicInterestRate = (Math.pow(1 + annualRate / compoundingPeriodsPerYear, compoundingPeriodsPerYear / periodsPerYear) - 1);

        // EMI Calculation
        const EMI = P * (periodicInterestRate * Math.pow(1 + periodicInterestRate, totalPayments)) /
            (Math.pow(1 + periodicInterestRate, totalPayments) - 1);

        // Update the result, rounding to 2 decimal places
        setResult({
            payment: EMI ? EMI.toFixed(2) : "0",
        });
    };

    // Recalculate the payment whenever input values change
    useEffect(() => {
        calculatePayment();
    }, [loanAmount, interestRate, termLength, paymentFrequency, firstPaymentDate, compoundPeriod]);

    return (
        <div style={{ marginTop: "100px" }} className="bg-gray-50 p-2">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-blue-600">EMI Calculator</h1>
                    <p className="text-gray-600">Calculate your dynamic EMI based on frequency</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Fields */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Input fields:</h2>
                        <div className="space-y-4">
                            {/* Loan Amount */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="loanAmount" className="text-gray-700">Loan Amount</label>
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">&#163;</span>
                                    <input
                                        type="number"
                                        id="loanAmount"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                        className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                    />
                                </div>
                            </div>
                            {/* Annual Interest Rate */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="interestRate" className="text-gray-700">Annual Interest Rate (%)</label>
                                <input
                                    type="number"
                                    id="interestRate"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {/* Term Length */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="termLength" className="text-gray-700">Term Length (in Years)</label>
                                <input
                                    type="number"
                                    id="termLength"
                                    value={termLength}
                                    onChange={(e) => setTermLength(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                                />
                            </div>
                            {/* First Payment Date */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="firstPaymentDate" className="text-gray-700">First Payment Date</label>
                                <input
                                    type="date"
                                    id="firstPaymentDate"
                                    value={firstPaymentDate}
                                    onChange={(e) => setFirstPaymentDate(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-40"
                                />
                            </div>
                            {/* Compound Period */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="compoundPeriod" className="text-gray-700">Compound Period</label>
                                <select
                                    id="compoundPeriod"
                                    value={compoundPeriod}
                                    onChange={(e) => setCompoundPeriod(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Annually">Semi-Annually</option>
                                </select>
                            </div>
                            {/* Payment Frequency Dropdown */}
                            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                <label htmlFor="paymentFrequency" className="text-gray-700">Payment Frequency</label>
                                <select
                                    id="paymentFrequency"
                                    value={paymentFrequency}
                                    onChange={(e) => setPaymentFrequency(e.target.value)}
                                    className="bg-blue-100 text-gray-800 font-semibold p-2 rounded-lg w-40"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Semi-Monthly">Semi-Monthly</option>
                                    <option value="Bi-Weekly">Bi-Weekly</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Output Fields */}
                    <div className="output-fields -mt-28 md:mt-0">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results:</h2>
                        <div className="space-y-2">
                            <div className="p-4 border border-gray-300 rounded-lg">
                                <p className="text-gray-600">{paymentFrequency} Payment</p>
                                <p className="text-blue-600 font-semibold text-xl">&#163;{result.payment}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-4 border border-gray-300 rounded-lg flex flex-col md:flex-row justify-between items-center" style={{ "marginTop": "-124px" }}>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-shrink-0">
                            <img src={CalculatorHome} alt="Image description" className="w-24 h-24 object-cover rounded-full md:w-32 md:h-32" />
                        </div>
                        <p className="text-gray-600 text-center md:text-left">
                            Now that you know your FIRE number, Lets achieve it !!
                        </p>
                    </div>
                    <button className="mt-4 md:mt-0 text-white font-semibold px-4 py-2 rounded-lg bg-blue-500">
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
                            <p className="text-blue-600">FIRE Calculator</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EMICalculator;
