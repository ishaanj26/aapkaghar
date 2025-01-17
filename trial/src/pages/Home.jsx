import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ListingItem from '../components/ListingItem';
import axios from 'axios';
import { AppContent } from '../context/AppContext';

export default function Home() {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    const [recentlyViewedListings, setRecentlyViewedListings] = useState([]);
    const recentViewed = JSON.parse(localStorage.getItem('listingIds')) ||[]
    const { backendURL } = useContext(AppContent)

    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const navigate = useNavigate()

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



    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                axios.defaults.withCredentials = true
                const { data } = await axios.get(`${backendURL}/api/listing/get?offer=true&limit=4`)
                setOfferListings(data.listings);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        };
        const fetchRentListings = async () => {
            try {
                axios.defaults.withCredentials = true
                const { data } = await axios.get(`${backendURL}/api/listing/get?type=rent&limit=4`)
                setRentListings(data.listings);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchSaleListings = async () => {
            try {
                axios.defaults.withCredentials = true
                const { data } = await axios.post(`${backendURL}/api/listing/get?type=sale&limit=4`)
                if (data.success) {
                    setSaleListings(data.listings)
                }
                else {
                    console.log(data.message)
                }

            } catch (e) {
                console.log(e)
            }

        };
        fetchOfferListings();
    }, []);

    return (
        <div>
            {/* top */}
            <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
                <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
                    Find your next <span className='text-slate-500'>perfect</span>
                    <br />
                    place with ease
                </h1>
                <div className='text-gray-400 text-xs sm:text-sm'>
                    GoodLuck Logistics is the best place to find your next perfect place to
                    live.
                    <br />
                    We have a wide range of properties for you to choose from.
                </div>
                <Link
                    to={'/search'}
                    className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
                >
                    Let's get started...
                </Link>
            </div>

            {/* swiper */}
            <Swiper navigation
                pagination={{ clickable: true }} autoplay={{ delay: 5000 }}
            >
                {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                        <SwiperSlide>
                            <div onClick={() => { navigate(`/listing/${listing._id}`) }}
                                style={{
                                    background: `url("${listing.images[0]}") center no-repeat`,
                                    backgroundSize: 'cover',
                                }}
                                className='h-[500px] relative group hover:cursor-pointer'
                                key={listing._id}
                            >
                                <div className='absolute bottom-0 left-0 w-full p-4 bg-gray-900 bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 '>
                                    <h3 className='text-lg font-bold'>{listing.name}</h3>
                                    <p className='text-sm'>{listing.description}</p>
                                    <span className=''>
                                        <FaMapMarkerAlt className='mr-1 inline-block' />
                                        <span className='text-sm'>{listing.address}</span>
                                    </span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>

                {/* listing results for Recently Viewed Listings */}
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
                {/* listing results for offer, sale and rent */}
                {offerListings && offerListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
                            <p onClick={() => {
                                navigate('/search?offer=true')
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                            } className='text-sm text-blue-800 hover:underline cursor-pointer'>Show more offers</p>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {offerListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {rentListings && rentListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                            <p className='text-sm text-blue-800 hover:underline cursor-pointer' onClick={() => {
                                {
                                    navigate('/search?type=rent');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }} >Show more places for rent</p>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {rentListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
                {saleListings && saleListings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
                            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {saleListings.map((listing) => (
                                <ListingItem listing={listing} key={listing._id} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}