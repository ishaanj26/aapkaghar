import React from "react";
import { useContext } from 'react';
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function MyListings() {
  const { userListings, setUserListings, backendURL } = useContext(AppContent)
  const navigate = useNavigate()

  if (!userListings) {
    return <div className="flex justify-center items-center h-screen">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-black" role="status">
        <h3 className="sr-only">Loading...</h3>
      </div>
    </div>
  }

  const handleListingDelete = async (listingId) => {
    try {
      const { data } = await axios.delete(`${backendURL}/api/listing/delete/${listingId}`)
      if (data.success) {
        toast.success(data.message)
        setUserListings((prev) => prev.filter((listing) => listing._id !== listingId));
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">My Listings</h3>

          {
            (userListings && userListings.length > 0 )? userListings.map((listing, index) => (
              <div key={listing._id || index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">

                <div className="w-full md:w-48 h-48">
                  <img
                    src={listing.images[0]}
                    alt="Listing 1"
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">{listing.name}</h4>
                  <p className="text-gray-600 mb-4">{listing.description}</p>
                  <p className="text-gray-800 font-medium mb-2">Price: ${listing.regularPrice}</p>
                  <p className="text-gray-800 font-medium mb-4">Location: {listing.address}</p>

                  <div className="flex gap-4">
                    <button onClick={() => {
                      navigate(`../update-listing/${listing._id}`)
                    }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Edit
                    </button>
                    <button onClick={() => handleListingDelete(listing._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      Delete
                    </button>
                    <button onClick={(() => navigate(`../listing/${listing._id}`))} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )):<p className="mt-10 text-gray-600">No Listings has been created.</p>
          }
        </div>
      </div>
    </div>
  );
}
