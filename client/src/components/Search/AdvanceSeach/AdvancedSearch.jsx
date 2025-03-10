import React, { useState, useEffect } from "react";
import { SearchCheckbox } from "./SearchCheckBox";
import { TOTAL_AMENITIES } from "../../../data";
import RangeInputs from "./RangeInputs";
import SelectInput from "./SelectInput";

const AdvancedSearch = ({ isOpen }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [rangeValues, setRangeValues] = useState({ min: 10000, max: 100000000 });
    const [areaValues, setAreaValues] = useState({ min: 100, max: 100000 });
    const [rooms, setRooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleRangeChange = (values) => {
        setRangeValues(values);
    };
    const handleAreaChange = (values) => {
        setAreaValues(values);
    };

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);


    const handleRoomChange = (e) => {
        const selectedRoom = e.target.value;
        setRooms(selectedRoom)
    };

    const handleBathroomChange = (e) => {
        const selectedBathroom = e.target.value;
        setBathrooms(selectedBathroom)
    };

    const handleBedroomChange = (e) => {
        const selectedBedroom = e.target.value;
        setBedrooms(selectedBedroom)
    };


    const handleAmenityChange = (e) => {
        const selectedAmenity = e.target.name;
        if (selectedAmenities.includes(selectedAmenity)) {
            setSelectedAmenities(selectedAmenities.filter((amenity) => amenity !== selectedAmenity));
        } else {
            setSelectedAmenities([...selectedAmenities, selectedAmenity]);
        }
    };

    const advancedSearchButton = () => {
        console.log("Advanced Search Button Clicked");
        console.log("Range Values: ", rangeValues);
        console.log("Area Values: ", areaValues);
        console.log("Rooms: ", rooms);
        console.log("Bathrooms: ", bathrooms);
        console.log("Bedrooms: ", bedrooms);
        console.log("Selected Amenities: ", selectedAmenities);

    }

    return (
        <div
            className={`xl:h-[388px] xl:top-24 top-[25.5rem] w-full xl:absolute bg-white rounded-xl shadow-xl 
                transition-all duration-500 flex flex-col px-4 py-6 z-10
        ${isVisible ?
                    'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} `}
        >
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-24">
                <div className="flex flex-col">
                    <p className="font-[500] text-[16px]">Full price</p>
                    <div className="flex gap-6">
                        <RangeInputs min={10000} max={100000000} onChange={handleRangeChange} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-[500] text-[16px]">Area Sqmt</p>
                    <div className="flex gap-6">
                        <RangeInputs min={100} max={10000} onChange={handleAreaChange} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 mt-4">
                <div className="flex flex-col">
                    <p className="font-[500] text-[16px] mb-2">Rooms</p>
                    <div className="flex gap-6">
                        <SelectInput
                            itemName="Room"
                            options={["1", "2", "3", "4", "5", "5+"]}
                            onChange={handleRoomChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-[500] text-[16px] mb-2">Bathrooms</p>
                    <div className="flex gap-6">
                        <SelectInput
                            itemName="Bathroom"
                            options={["1", "2", "3", "4", "5", "5+"]}
                            onChange={handleBathroomChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-[500] text-[16px] mb-2">Bedrooms</p>
                    <div className="flex gap-6">
                        <SelectInput
                            itemName="Bedroom"
                            options={["1", "2", "3", "4", "5", "5+"]}
                            onChange={handleBedroomChange}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-6 mt-3">
                <p className="font-[500] text-[16px] mb-2">Amenities</p>
                {
                    TOTAL_AMENITIES.map((amenity, index) => (
                        <SearchCheckbox
                            key={index}
                            label={amenity.label}
                            amenity={amenity.label}
                            onChange={handleAmenityChange}
                        />
                    ))
                }
            </div >
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={advancedSearchButton}
            >
                Search
            </button>
        </div >
    );
};

export default AdvancedSearch;