import React, { useState } from 'react';
import {propertyOptions } from '../../data'

export const HouseTypeDropdown = () => {
    const [selectedHouseType, setSelectedHouseType] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (type) => {
        setSelectedHouseType(type);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative inline-block text-left border py-1 xl:p-0 lg:border-none 
        rounded-full w-full ">
            <button
                className="inline-flex justify-between gap-x-1.5 rounded-md w-full px-4 lg:px-2 xl:px-0
 py-2 text-md text-gray-900 xl:shadow-none 
  "                onClick={handleDropdownClick}
            >
                {selectedHouseType || 'Select House Type'}
                <svg
                    className={`ml-2 w-4 h-4 ${isDropdownOpen ? 'rotate-180' : ''}`}
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
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 xl:w-56 w-full 
  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className='py-1'>
                        {propertyOptions.map((houseType) => (
                            <div
                                key={houseType.label}
                                className="block cursor-pointer px-4 py-2 text-sm text-gray-700  hover:text-blue-500"
                                onClick={() => handleOptionClick(houseType.label)}
                            >
                                {houseType.label}
                            </div>
                        ))}</div>
                </div>
            )}
        </div>
    );
};
