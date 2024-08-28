import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MortgageCalculator = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div style={{ marginTop: "50px" }} className="bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {currentPage === 1 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mortgage Information</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Loan Amount</label>
                                <p>&#163;1,00,000.00</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Annual Interest Rate (%)</label>
                                <p>12.75%</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Term Length (in Years)</label>
                                <p>25</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">First Payment Date</label>
                                <p>01-01-2024</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Compound Period</label>
                                <p>Monthly</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Payment Frequency</label>
                                <p>Monthly</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Monthly Payment</label>
                                <p>&#163;1,109.05</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 2 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Extra Payments</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Start at Payment No</label>
                                <p>5</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Extra Payment</label>
                                <p>$ -</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Payment Interval</label>
                                <p>1</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Extra Annual Payment</label>
                                <p>$ -</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Payment # (1-12)</label>
                                <p>3</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Total Extra Payments</label>
                                <p>-</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Interest Savings</label>
                                <p>$0.00</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 3 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Estimated PITI Payments</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Home Value or Price</label>
                                <p>&#163;1,00,000.00</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Property Tax (% of Home Value)</label>
                                <p>1.80%</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Yearly Property Taxes</label>
                                <p>&#163;1,800.00</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Insurance (% of Home Value)</label>
                                <p>0.40%</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Yearly H.O. Insurance</label>
                                <p>&#163;400.00</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Monthly PMI</label>
                                <p>&#163;80.00</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">PITI Payment</label>
                                <p>&#163;1,372.38</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 4 && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Years Until Paid Off</label>
                                <p>25</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Number of Payments</label>
                                <p>300</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Last Payment Date</label>
                                <p>01-12-2048</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Total Payments</label>
                                <p>&#163;3,32,719.79</p>
                            </div>
                            <div className="flex justify-between p-4 border border-gray-300 rounded-lg">
                                <label className="text-gray-700">Total Interest</label>
                                <p>&#163;2,32,719.79</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-8">
                    <button
                        className={`flex items-center px-6 py-2 text-white ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"} rounded-full`}
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                        Previous
                    </button>
                    <button
                        className={`flex items-center px-6 py-2 text-white ${currentPage === 4 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"} rounded-full`}
                        onClick={goToNextPage}
                        disabled={currentPage === 4}
                    >
                        Next
                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MortgageCalculator;
