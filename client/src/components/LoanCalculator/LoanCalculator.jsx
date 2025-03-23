import React, { useState } from "react";
import { formatNumber } from '../.././FormatNumber'

export default function LoanCalculator() {
    const [loanAmount, setLoanAmount] = useState();
    const [downPayment, setDownPayment] = useState();
    const [interestRate, setInterestRate] = useState();
    const [loanTenure, setLoanTenure] = useState();
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    const calculateEMI = () => {
        const principal = parseFloat(loanAmount) - parseFloat(downPayment);
        const annualInterestRate = parseFloat(interestRate) / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        const months = parseFloat(loanTenure) * 12;

        if (monthlyInterestRate === 0) {
            const emi = principal / months;
            setMonthlyEMI(emi.toFixed(2));
            setTotalInterest((emi * months - principal).toFixed(2));
            setTotalPayment((emi * months).toFixed(2));
        } else {
            const emi =
                (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
                (Math.pow(1 + monthlyInterestRate, months) - 1);
            const totalPayment = emi * months;
            const totalInterest = totalPayment - principal;

            setMonthlyEMI((emi.toFixed(2)));
            setTotalInterest(totalInterest.toFixed(2));
            setTotalInterest(totalInterest.toFixed(2));
            setTotalPayment( totalPayment.toFixed(2));
        }
    };

    return (
        <div>
            <h1 className="text-xl font-semibold my-4">Loan Calculator</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Loan Amount (₹)</label>
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter loan amount"
                    className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Down Payment (₹)</label>
                <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    placeholder="Enter down payment"
                    className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Annual Interest Rate (%)</label>
                <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="Enter interest rate"
                    className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Loan Tenure (Years)</label>
                <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    placeholder="Enter loan tenure"
                    className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                onClick={calculateEMI}
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            >
                Calculate EMI
            </button>

            {monthlyEMI > 0 && (
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Calculation Results:</h2>
                    <p className="text-sm text-gray-700">
                        <strong>Monthly EMI: </strong>₹{formatNumber(monthlyEMI)}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>Total Interest Payable: </strong>₹{formatNumber(totalInterest)}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>Total Payment (Principal + Interest): </strong>₹{formatNumber(totalPayment)}
                    </p>
                </div>
            )}
        </div>
    );
};
