import { houses } from "../../../data"
import { HouseCard } from "../FeaturedProperties/HouseCard"
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css/bundle';
import axios from 'axios';
import { AppContent } from '../../.././context/AppContext';
import LoadingScreen from "../../.././components/LoadingScreen/LoadingScreen"

import image1 from '../../.././assests/houses/img1.jpg'

export default function PickUpPage() {

    const [recentlyViewedListings, setRecentlyViewedListings] = useState([]);
    const recentViewed = JSON.parse(localStorage.getItem('listingIds')) || []
    const { backendURL } = useContext(AppContent)
    const [loading, setLoading] = useState(false)

    const fetchListingData = async (recentViewed) => {
        const listingData = [];

        for (const listingId of recentViewed) {
            try {
                const response = await axios.get(`${backendURL}/api/listing/get/${listingId}`);
                const data = response.data;
                listingData.push(data);
            } catch (error) {
                console.error(`Error fetching listing data for ID ${listingId}:`, error);
            }
        }

        return listingData;
    };
    useEffect(() => {
        const fetchRecentlyViewedData = async () => {

            const data = await fetchListingData(recentViewed);
            setRecentlyViewedListings(data);

        };
        fetchRecentlyViewedData();
    }, [recentViewed]);


    if (loading) {
        return <LoadingScreen />
    }

    {/* listing results for Recently Viewed Listings */ }
    return (
        <div>
            {recentlyViewedListings.length > 0 && (
                <div className="flex flex-col justify-center items-center py-20 mt-20">
                    <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">Last Watched Properties</p>
                    <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">Continue Where You Left Off</h1>
                    <div className="md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 flex flex-col gap-6 w-full">
                        {recentlyViewedListings.map((house) => {
                            if (!house.listing) {
                                return null
                            }
                            return (
                                < HouseCard
                                    key={house.listing._id}
                                    image={house.listing.images[0].url}
                                    status={house.listing.status}
                                    city={house.listing.state}
                                    district={house.listing.neighborhood}
                                    title={house.listing.title}
                                    price={house.listing.price}
                                    bedrooms={house.listing.bedrooms}
                                    bathrooms={house.listing.bathrooms}
                                    area={house.listing.size}
                                    agentId={house.listing.userRef}
                                    listingId={house.listing._id}
                                    address={house.listing.address}
                                />
                            )
                        })}
                    </div>
                </div>
            )}


        </div>
    )
}

/*
 {recentlyViewedListings && recentlyViewedListings.length > 0 && (
    <div>
        <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recently Viewed Listings</h2>
        </div>
        <div className='flex flex-wrap gap-4'>
            {recentlyViewedListings.map((listing) => (
                <ListingItem listing={listing.listing} key={listing._id} />
            ))}</div>
    </div>
)}
*/