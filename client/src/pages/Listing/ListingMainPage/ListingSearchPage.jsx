export default function ListingSearchPage({ image1, propertyOptions }) {
    return (
        <div className="flex flex-col items-center lg:w-1/3 mt-8 lg:mt-0 lg:ml-8">
            {/* Contact Seller */}
            <div className="bg-gray-100 p-6 rounded-lg w-full text-center">
                <img
                    src={image1}
                    alt="John Smith"
                    className="rounded-full mx-auto w-[25%] h-[50%] mb-4"
                />
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-gray-600">1333456868</p>
                <p className="text-gray-600">themesflat@gmail.com</p>
            </div>
            {/* Search Section */}

            <div className="mt-6 bg-gray-100 p-6 rounded-lg w-full text-center">
                <h4 className="text-lg font-semibold">Search</h4>
                <div className="flex border-b mb-4">
                    <button className="flex-1 text-center py-2 font-semibold border-b-2 border-blue-600">
                        FOR RENT
                    </button>
                    <button className="flex-1 text-center py-2 font-semibold text-gray-600">
                        FOR SALE
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Keyword
                        </label>
                        <input
                            type="text"
                            placeholder="Search Keyword"
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option>Enter Property Type</option>
                            {propertyOptions.map((value, index) => (
                                <option key={index}>{value.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="Neighborhood"
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Rooms
                            </label>
                            <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option>Rooms</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Bathrooms
                            </label>
                            <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option>Baths: Any</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Bedrooms
                        </label>
                        <select className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <option>Beds: Any</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Price Range
                        </label>
                        <input
                            type="range"
                            className="w-full h-1 bg-gray-300 rounded-full appearance-none "
                            min="10000"
                            max="10000000"
                        />
                        <p className="text-sm text-gray-600">From ₹10000 to ₹10,000,000</p>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Size Range
                        </label>
                        <input
                            type="range"
                            className="w-full h-1 bg-gray-300 rounded-full appearance-none range-thumb "
                            min="0"
                            max="1000"
                        />

                        <p className="text-sm text-gray-600">From 0 to 1,000</p>
                    </div>


                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">Show Advanced</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-900"
                    >
                        Find Properties
                    </button>
                </form>
            </div>
        </div>
    )
}