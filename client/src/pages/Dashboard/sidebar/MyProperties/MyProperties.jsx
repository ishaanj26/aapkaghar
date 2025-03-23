import React, { useContext, useState } from "react";
import { FaRegEdit, FaBan } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { AppContent } from '../../../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen';
import { formatDate, formatNumber } from "../../../../FormatNumber";

const MyPropertiesMainPage = () => {
    const { userListings, setUserListings, backendURL, userData } = useContext(AppContent);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [loading, setLoading] = useState(false);

    // State for delete confirmation modal
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedListingId, setSelectedListingId] = useState(null);

    const filteredProperties = userListings.filter((property) => {
        return (
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (statusFilter === "" || property.approval === statusFilter)
        );
    });

    if (!userListings) {
        return <LoadingScreen />;
    }

    // Open confirmation modal
    const handleDeleteClick = (listingId) => {
        setSelectedListingId(listingId);
        setShowConfirmModal(true);
    };

    // Function to delete listing after confirmation
    const handleConfirmDelete = async () => {
        try {
            const { data } = await axios.delete(`${backendURL}/api/listing/delete/${selectedListingId}`);
            if (data.success) {
                toast.success(data.message);
                setUserListings((prev) => prev.filter((listing) => listing._id !== selectedListingId));
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to delete listing.");
        }
        setShowConfirmModal(false);
        setSelectedListingId(null);
    };

    const handleSoldClick = async (listingId, currentStatus) => {
        try {
            const newStatus = !currentStatus; // Toggle status

            const { data } = await axios.post(`${backendURL}/api/listing/update/${listingId}`, { sold: newStatus, userRef: userData._id });

            if (data.success) {
                toast.success(`Listing marked as ${newStatus ? "Sold" : "Unsold"}.`);
                setUserListings((prev) =>
                    prev.map((listing) =>
                        listing._id === listingId ? { ...listing, sold: newStatus } : listing
                    )
                );
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Failed to update listing.");
        }
    };
    if (loading) {
        return <LoadingScreen />
    }
    return (
        <div>
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-4 w-full md:items-center">
                <input
                    type="text"
                    placeholder="Search by title"
                    className="p-2 border rounded-md w-full md:w-1/2 lg:w-1/3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-2 border rounded-md w-full md:w-1/4 lg:w-1/6"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All Status</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>

            {/* Listing Display Section */}
            <div className="p-1">
                <div className="hidden lg:grid grid-cols-10 gap-4 font-semibold border-b pb-2">
                    <div className="col-span-4 flex justify-center">Listing</div>
                    <div className="col-span-2 flex justify-center">Status</div>
                    <div className="col-span-4 flex justify-center">Action</div>
                </div>
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:grid lg:grid-cols-10 gap-4 items-center border-b py-4"
                        >
                            {/* First Column (40%) */}
                            <div className="col-span-4 flex items-center justify-left gap-4 w-full">
                                <img
                                    src={property.images[0].url}
                                    alt={property.title}
                                    className="w-40 h-40 rounded-md object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold">{property.title}</h3>
                                    <p className="text-sm text-gray-500">Posting date: {formatDate(property.createdAt)}</p>
                                    <p className="text-blue-600 font-semibold">₹{formatNumber(property.price)}</p>
                                </div>
                            </div>

                            {/* Second Column (20%) */}
                            <div className="col-span-2 flex justify-center">
                                <span
                                    className={`px-5 py-2 rounded-full text-white text-sm ${property.sold ? "bg-green-900" : property.approval === "Approved"
                                        ? "bg-green-500"
                                        : "bg-orange-500"}`}
                                >
                                    {property.sold ? "Sold" : property.approval}
                                </span>
                            </div>

                            {/* Third Column (40%) */}
                            <div className="col-span-4 flex flex-wrap lg:flex-nowrap gap-2 lg:w-full w-[60%] justify-center">
                                <button onClick={() => navigate(`/update-listing/${property._id}`)} className="justify-center flex items-center gap-1 bg-blue-100 p-2 rounded-md shadow-md cursor-pointer hover:bg-blue-200 transition w-full lg:w-auto">
                                    <FaRegEdit className="text-blue-500" />
                                    <span className="text-blue-600 font-medium">Edit</span>
                                </button>
                                <button
                                    onClick={() => handleSoldClick(property._id, property.sold)}
                                    className="justify-center flex items-center gap-1 bg-gray-100 p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-400 transition w-full lg:w-auto"
                                >
                                    <FaBan className="text-gray-900" />
                                    <span className="text-gray-900 font-medium">
                                        {property.sold ? "Unsold" : "Sold"}
                                    </span>
                                </button>
                                <button onClick={() => handleDeleteClick(property._id)} className="flex items-center justify-center gap-1 bg-red-100 p-2 rounded-md shadow-md cursor-pointer hover:bg-red-200 transition w-full lg:w-auto">
                                    <MdDeleteForever className="text-red-500" />
                                    <span className="text-red-600 font-medium">Delete</span>
                                </button>
                                <button onClick={() => navigate(`/listing/${property._id}`)} className="justify-center flex items-center gap-1 bg-green-100 p-2 rounded-md shadow-md cursor-pointer hover:bg-green-200 transition w-full lg:w-auto">
                                    <GrView className="text-green-500" />
                                    <span className="text-green-600 font-medium">View</span>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="mt-10 text-gray-600">No Listings found.</p>
                )}
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-gray-600 mb-4">
                            Are you sure you want to delete this listing? This action cannot be reversed.
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                                onClick={() => setShowConfirmModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                onClick={handleConfirmDelete}
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPropertiesMainPage;
