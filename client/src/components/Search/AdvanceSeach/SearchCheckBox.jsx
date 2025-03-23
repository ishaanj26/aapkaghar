import React from "react";

export const SearchCheckbox = ({ amenity, onChange }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id={amenity}
                name={amenity}
                aria-label={`Checkbox for ${amenity}`}
                onChange={onChange}
                className="custom-checkbox w-5 h-5 border-2 border-gray-300 rounded-lg cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out hover:border-gray-400"
            />
            <label htmlFor={amenity} className="ml-2 text-[14px] text-gray-600">
                {amenity}
            </label>
        </div>
    );
};