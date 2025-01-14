import React from "react";

export default function MyListings() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Listings Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">My Listings</h3>

        {/* Listing Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Listing 1"
            className="w-full md:w-48 h-48 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Beautiful 3-Bedroom Apartment</h4>
            <p className="text-gray-600 mb-4">
              Located in downtown New York, this apartment offers stunning views and modern amenities.
            </p>
            <p className="text-gray-800 font-medium mb-2">Price: $500,000</p>
            <p className="text-gray-800 font-medium mb-4">Location: New York, USA</p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Delete
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Listing Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Listing 2"
            className="w-full md:w-48 h-48 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Cozy 2-Bedroom Cottage</h4>
            <p className="text-gray-600 mb-4">
              A charming cottage located in the countryside, perfect for a peaceful retreat.
            </p>
            <p className="text-gray-800 font-medium mb-2">Price: $300,000</p>
            <p className="text-gray-800 font-medium mb-4">Location: Vermont, USA</p>
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Delete
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}