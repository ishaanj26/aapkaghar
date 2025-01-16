import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdBookmarkBorder, MdBookmark } from 'react-icons/md';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ListingItem({ listing }) {

  const [isBookmarked, setIsBookmarked] = useState(false);
  const { userData,getUserData,backendURL } = useContext(AppContent);
  console.log("data---->", userData.bookmarks)
  // Fetch user's bookmarked listings and check if the current listing is bookmarked

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
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] relative'>
      {userData && <div
        className='absolute top-2 right-2 p-2 bg-white rounded-full cursor-pointer hover:bg-gray-100 z-10'
        onClick={toggleBookmark}
      >
        {isBookmarked ? (
          <MdBookmark className='h-6 w-6 text-yellow-500' />
        ) : (
          <MdBookmarkBorder className='h-6 w-6 text-gray-500' />
        )}
      </div>}
      <Link to={`/listing/${listing._id}`}>
        <div className='overflow-hidden'>
          <img
            src={
              listing.images[0] ||
              'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
            }
            alt='listing cover'
            className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
          />/</div>
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}