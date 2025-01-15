import React from "react";
import { useContext } from 'react';
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function MyListings() {
  const { userListings, setUserListings } = useContext(AppContent)
  const navigate = useNavigate()
  return (

    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Listings Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-4">My Listings</h3>

        {/* Loop through userListings */}
        {userListings.map((listing, index) => (
          <div key={listing._id || index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            {/* Listing Image Slider */}
            <div className="w-full md:w-48 h-48">
              <img
                src={listing.images[0]}
                alt="Listing 1"
                className="w-full md:w-48 h-48 object-cover rounded-lg"
              />
            </div>

            {/* Listing Details */}
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-2">{listing.name}</h4>
              <p className="text-gray-600 mb-4">{listing.description}</p>
              <p className="text-gray-800 font-medium mb-2">Price: ${listing.regularPrice}</p>
              <p className="text-gray-800 font-medium mb-4">Location: {listing.address}</p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Delete
                </button>
                <button onClick={(()=> navigate(`../listing/${listing._id}`))} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
