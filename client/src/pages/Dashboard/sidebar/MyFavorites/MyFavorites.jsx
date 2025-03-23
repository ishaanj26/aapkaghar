import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaMapMarkerAlt, FaDollarSign, FaBookmark } from "react-icons/fa"; // Importing icons from react-icons library
import { AppContent } from "../../../../context/AppContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import { formatNumber } from '../../../.././FormatNumber'
import {useNavigate} from 'react-router'

export default function MyFavorites() {

    const { userData, getUserData, backendURL } = useContext(AppContent);
    const [bookmarkedList, setBookmarkedList] = useState('')

    useEffect(() => {
        const fetchBookMarkListings = async () => {
            try {
                const { data } = await axios.post(`${backendURL}/api/listing/getAllListings`, { bookmarkIds: userData.bookmarks })
                if (data.success)
                    setBookmarkedList(data.listings)
            } catch (e) {
                console.log(e)
            }
        }
        fetchBookMarkListings()
    }, [userData.bookmarks])

    const bookmarkedProperties = bookmarkedList
        ? bookmarkedList
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
                    setBookmarkedList(bookmarkedProperties.filter((property) => property._id !== _id)) // Update bookmarkedList state

                }
            }
            else {
                console.log('Error')
            }
        } catch (e) {
            console.log(e)
        }
    };

    const navigate=useNavigate()
    if (bookmarkedProperties.length === 0) {
        return (
            <p className="mt-10 text-gray-600">No bookmarked properties found.</p>
        )
    } else {
        return (
            <div className="p-10 bg-gradient-to-r from-blue-100 via-white to-blue-100 min-h-screen text-gray-900 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {bookmarkedProperties.map((property) => (
                        <div
                        onClick={()=>{
                            navigate(`/listing/${property._id}`)
                        }}
                            key={property.id}
                            className="hover:cursor-pointer bg-white shadow-xl rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                            <img src={property.images[0].url} alt={property.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
                                <p className="text-gray-500 mt-2">{property.address}</p>
                                <p className="text-blue-600 font-bold mt-3 text-lg">₹{formatNumber(property.price)}</p>
                                <button onClick={() => handleRemoveBookmark(property._id)} className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300">
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}