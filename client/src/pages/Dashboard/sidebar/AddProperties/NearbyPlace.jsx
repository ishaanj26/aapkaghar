import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function CategoryLocationInput({ categories, setCategories }) {
    const [newCategory, setNewCategory] = useState("");
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingLocation, setEditingLocation] = useState(null);

    const addCategory = () => {
        if (newCategory.trim() === "") return;
        setCategories([...categories, { name: newCategory, locations: [], newLocation: "", newDistance: "" }]);
        setNewCategory("");
    };

    const deleteCategory = (index) => {
        setCategories(prevCategories => prevCategories.filter((_, i) => i !== index));
    };

    const addLocation = (index) => {
        const updatedCategories = [...categories];
        const { newLocation, newDistance } = updatedCategories[index];

        if (newLocation.trim() === "" || newDistance.trim() === "") return;

        updatedCategories[index].locations.push({
            name: newLocation,
            distance: parseFloat(newDistance),
        });

        updatedCategories[index].newLocation = "";
        updatedCategories[index].newDistance = "";
        setCategories([...updatedCategories]);
    };

    const deleteLocation = (catIndex, locIndex) => {
        setCategories(prevCategories => {
            return prevCategories.map((category, index) => {
                if (index === catIndex) {
                    return {
                        ...category,
                        locations: category.locations.filter((_, i) => i !== locIndex)
                    };
                }
                return category;
            });
        });
    };

    const editCategory = (index, newName) => {
        const updatedCategories = [...categories];
        updatedCategories[index].name = newName;
        setCategories(updatedCategories);
    };

    const editLocation = (catIndex, locIndex, newName, newDistance) => {
        const updatedCategories = [...categories];
        updatedCategories[catIndex].locations[locIndex] = { name: newName, distance: parseFloat(newDistance) };
        setCategories(updatedCategories);
    };

    return (
        <div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Enter category name (e.g., Fitness Center)"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button onClick={addCategory} type="button" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                    Add Category
                </button>
            </div>

            {categories.map((category, index) => (
                <div key={index} className="mb-6 p-5 bg-gray-100 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-3 border-b pb-2">
                        {editingCategory === index ? (
                            <input
                                type="text"
                                value={category.name}
                                onChange={(e) => editCategory(index, e.target.value)}
                                onBlur={() => setEditingCategory(null)}
                                autoFocus
                                className="p-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        ) : (
                            <h3
                                className="text-xl font-semibold text-blue-700 cursor-pointer"
                                onClick={() => setEditingCategory(index)}
                            >
                                {category.name}
                            </h3>
                        )}
                        <button
                        type="button"
                            onClick={() => deleteCategory(index)}
                            className="p-2 rounded-lg hover:bg-red-100 transition"
                        >
                            <FaTrash className="fill-red-600" />
                        </button>
                    </div>

                    <div className="flex space-x-3 mb-3">
                        <input
                            type="text"
                            placeholder="Enter location name"
                            value={category.newLocation}
                            onChange={(e) => {
                                const updatedCategories = [...categories];
                                updatedCategories[index].newLocation = e.target.value;
                                setCategories(updatedCategories);
                            }}
                            className="p-3 border border-gray-300 rounded-lg flex-grow focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Distance (kms)"
                            value={category.newDistance}
                            onChange={(e) => {
                                const updatedCategories = [...categories];
                                updatedCategories[index].newDistance = e.target.value;
                                setCategories(updatedCategories);
                            }}
                            className="p-3 border border-gray-300 rounded-lg w-[10rem] focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button type="button" onClick={() => addLocation(index)} className="p-2 rounded-lg hover:bg-green-100 transition">
                            <IoMdAddCircleOutline className="fill-green-600 h-6 w-6" />
                        </button>
                    </div>

                    <ul className="space-y-2">
                        {category.locations.map((location, locIndex) => (
                            <li key={locIndex} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
                                {editingLocation === `${index}-${locIndex}` ? (
                                    <>
                                        <input
                                            type="text"
                                            value={location.name}
                                            onChange={(e) => editLocation(index, locIndex, e.target.value, location.distance)}
                                            onBlur={() => setEditingLocation(null)}
                                            autoFocus
                                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        <input
                                            type="number"
                                            value={location.distance}
                                            onChange={(e) => editLocation(index, locIndex, location.name, e.target.value)}
                                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </>
                                ) : (
                                    <span className="text-gray-700 font-medium cursor-pointer" onClick={() => setEditingLocation(`${index}-${locIndex}`)}>
                                        {location.name} - {location.distance} kms
                                    </span>
                                )}
                                <button type="button" onClick={() => deleteLocation(index, locIndex)} className="p-2 rounded-lg hover:bg-red-100 transition">
                                    <FaTrash className="fill-red-600" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
