import { useContext, useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaHeart,FaRegHeart } from 'react-icons/fa';
import { AppContent } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Bookmark({ listing }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { userData, getUserData, backendURL } = useContext(AppContent);
    useEffect(() => {
        const checkIfBookmarked = async () => {
            try {
                if (userData.bookmarks.includes(listing._id))
                    setIsBookmarked(true);
            }
            catch (error) {
                console.error('Error fetching bookmarks:', error);
            }
        };

        // Only fetch bookmarks if the user is logged in
        if (userData) {
            checkIfBookmarked();
        }
    }, [listing._id, userData]);
    
    const toggleBookmark = async () => {
        try {
            axios.defaults.withCredentials = true
            const endpoint = isBookmarked
                ? `${backendURL}/api/user/removeBookmark`
                : `${backendURL}/api/user/addBookMarks`;
            const { data } = await axios.post(endpoint, { listingId: listing._id })

            if (data.success) {
                setIsBookmarked(!isBookmarked);
                toast.success(isBookmarked ? 'Bookmark removed' : 'Bookmark added')
                if (userData) {
                    const updatedBookmarks = isBookmarked
                        ? userData.bookmarks.filter((id) => id !== listing._id) // Remove the bookmark
                        : [...userData.bookmarks, listing._id]; // Add the bookmark

                    getUserData({ ...userData, bookmarks: updatedBookmarks });
                }
            }
            else {
                console.log('Error')
            }
        } catch (error) {
            console.error('Error updating bookmark:', error);
            toast.error('Failed to update bookmark. Please try again.');
        }
    };

    return (
        <button
            onClick={
                toggleBookmark
            }
            aria-label="Add to Favorites" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            data-tooltip-id="favorite-tooltip"
            data-tooltip-content="Add to Favorites"
        >
            {isBookmarked ? (
                <FaHeart   className='h-6 w-6 text-red-600' />
            ) : (
                <FaRegHeart  className='h-6 w-6 text-red-500' />
            )}
        </button>
    )
}