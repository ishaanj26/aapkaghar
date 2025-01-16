import React, { useContext } from "react";
import { FaTrash, FaMapMarkerAlt, FaDollarSign, FaBookmark } from "react-icons/fa"; // Importing icons from react-icons library
import { AppContent } from "../context/AppContext";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Bookmarks() {

    const { userData, userListings, getUserData, backendURL } = useContext(AppContent);

    const bookmarkedProperties = userListings
        ? userListings.filter(listing => userData.bookmarks.includes(listing._id))
        : [];

    // Sample data for bookmarked properties

    const handleRemoveBookmark = async (_id) => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/user/removeBookmark`, { listingId: _id })
            if (data.success) {
                toast.success('Bookmark removed')
                if (userData) {
                    const updatedBookmarks = userData.bookmarks.filter((id) => id !== _id) // Remove the bookmark
                    getUserData({ ...userData, bookmarks: updatedBookmarks });
                }
            }
            else {
                console.log('Error')
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (userData.isAccountVerified ?
        <div className="container mx-auto p-6">
            <div className="flex items-center">
                <FaBookmark className="text-blue-800 mr-2" size={24} />
                <h1 className="text-3xl font-bold text-gray-800">Your Bookmarks</h1>
            </div>
            {bookmarkedProperties.length > 0 ? (
                <div className="space-y-6 mt-10">
                    {bookmarkedProperties.map((property) => (
                        <div
                            key={property._id}
                            className="flex items-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <Link to={`../listing/${property._id}`}>
                                <img
                                    src={property.images[0]}
                                    alt={property.name}
                                    className="w-32 h-24 object-cover rounded-lg mr-6"
                                />
                            </Link>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
                                <div className="flex items-center mt-2 text-gray-600">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>{property.address}</span>
                                </div>
                                <div className="flex items-center mt-2 text-gray-600">
                                    <FaDollarSign className="mr-2" />
                                    <span>{property.regularPrice}</span>
                                </div>
                            </div>
                            <button
                                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                onClick={() => handleRemoveBookmark(property._id)}
                            >
                                <FaTrash className="mr-2" />
                                Remove Bookmark
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="mt-10 text-gray-600">No bookmarked properties found.</p>
            )}
        </div > : <div className="flex justify-center items-center h-screen">
            <p className="m-auto text-gray-600">Please verify your account to create listings.</p>
        </div>
    );
}