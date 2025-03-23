import React from "react";

const SelectInput = ({ itemName, options, onChange }) => {
    return (
        <div className="flex flex-col">
                       <div className="relative">
                <select
                    className="w-64 px-4 py-2.5 text-base text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out hover:border-gray-400"
                    onChange={onChange}
                >
                    <option value="" disabled selected>
                        {itemName}
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SelectInput;