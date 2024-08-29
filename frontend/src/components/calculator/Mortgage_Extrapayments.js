import React,{useState} from 'react'

export default function Mortgage_Extrapayments() {

    // Extra Payments State Variables
    const [startPaymentNo, setStartPaymentNo] = useState('');
    const [extraPayment, setExtraPayment] = useState('');
    const [paymentInterval, setPaymentInterval] = useState('');
    const [extraAnnualPayment, setExtraAnnualPayment] = useState('');
    const [paymentNumber, setPaymentNumber] = useState('');

    const [totalExtraPayments, setTotalExtraPayments] = useState('');
    const [interestSavings, setInterestSavings] = useState('');

    return (
        <div>
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Extra Payments:</h2>
                <div className="space-y-4">
                    {/* Start at Payment No */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="startPaymentNo" className="text-gray-700">Start at Payment No</label>
                        <input
                            type="number"
                            id="startPaymentNo"
                            value={startPaymentNo}
                            onChange={(e) => setStartPaymentNo(e.target.value)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Extra Payment */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="extraPayment" className="text-gray-700">Extra Payment</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="extraPayment"
                                value={extraPayment}
                                onChange={(e) => setExtraPayment(e.target.value)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Payment Interval */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="paymentInterval" className="text-gray-700">Payment Interval</label>
                        <input
                            type="number"
                            id="paymentInterval"
                            value={paymentInterval}
                            onChange={(e) => setPaymentInterval(e.target.value)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Extra Annual Payment */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="extraAnnualPayment" className="text-gray-700">Extra Annual Payment</label>
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">$</span>
                            <input
                                type="number"
                                id="extraAnnualPayment"
                                value={extraAnnualPayment}
                                onChange={(e) => setExtraAnnualPayment(e.target.value)}
                                className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                            />
                        </div>
                    </div>

                    {/* Payment # (1-12) */}
                    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                        <label htmlFor="paymentNumber" className="text-gray-700">Payment # (1-12)</label>
                        <input
                            type="number"
                            id="paymentNumber"
                            value={paymentNumber}
                            onChange={(e) => setPaymentNumber(e.target.value)}
                            className="bg-green-100 text-gray-800 font-semibold text-right p-2 rounded-lg w-24"
                        />
                    </div>

                    {/* Outputs */}
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <p className="text-gray-700 font-semibold">Total Extra Payments: <span className="finwise-green"> $8,900.00 </span></p>
                        <p className="text-gray-700 font-semibold">Interest Savings: <span className="finwise-green"> $6,828.54 </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
