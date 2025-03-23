import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContent } from "../../../context/AppContext";
import House1 from '../../../assests/houses/img1.jpg';
import { FaCodeCompare, FaRegHeart } from 'react-icons/fa6'
import { CiShare2 } from 'react-icons/ci'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import image1 from "../../../assests/persons/person2.avif"
import {
    MdLocationOn as LocationIcon,
    MdBed as BedIcon,
    MdBathtub,
    MdOutlineSquareFoot as AreaIcon
} from 'react-icons/md';



import LoanCalculator from '../../../components/LoanCalculator/LoanCalculator';
import { getAmenityIcon, houses, propertyOptions } from '../../../data';
import { HouseCard } from '../../Home/FeaturedProperties/HouseCard';
import ListingSearchPage from './ListingSearchPage';

import LoadingScreen from "../../.././components/LoadingScreen/LoadingScreen"
import { formatNumber } from "../../../FormatNumber";
import ImageListShow from "./ImagesListShow";
import Bookmark from "../../../components/BookMark/BookMark";




export default function ListingMainPage() {
    const { userData, backendURL } = useContext(AppContent)
    const params = useParams()
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [copied, setCopied] = useState(false);
    const [contact, setContact] = useState(false);


    const house1 = {
        id: 1,
        title: "House in LA",
        city: "Los Angeles",
        district: "Silver Lake",
        street: "456 Sunset Boulevard",
        price: 850000,
        type: "Apartment",
        bedrooms: 4,
        bathrooms: 3,
        area: 280,
        image: [
            House1,
        ],
        description:
            "Modern California bungalow with stunning views of the Silver Lake Reservoir. Features an open concept living space, updated kitchen with premium appliances, and a spacious backyard perfect for entertaining. Master suite includes a walk-in closet and spa-like bathroom.",
        parkingSpace: true,
        pool: true,
        security: true,
        yearBuilt: 1985,
        status: "For Sale",
        amenities: ["Garage", "Pool", "Security System", "Smart Home", "Garden"],
        mapCoordinates: "34.0522° N, 118.2437° W",
        contactNumber: "+1 323 555 0123",
        email: "silverlake@realestate.com",
        agentId: "LA001",
        listingDate: "2024-12-15",
        floor: "2",
        heatingType: "Central",
        AC: true,
        furnished: false,
        petFriendly: true,
        renovation: "Renovated 2022",
        nearby: [
            {
                category: "Fitness Center",
                locations: [
                    { name: "24 Hour Fitness", distance: "0.172 miles" },
                    { name: "24 Hour Fitness Super Sport", distance: "0.172 miles" },
                ],
            },
            {
                category: "Bank",
                locations: [
                    { name: "Regions Bank", distance: "0.222 miles" },
                    { name: "Regions Bank", distance: "0.224 miles" },
                    { name: "Wells Fargo", distance: "0.249 miles" },
                ],
            },
            {
                category: "Doctor’s Office",
                locations: [
                    {
                        name: "Heartland Health Care and Rehabilitation Center of Sunrise",
                        distance: "0.230 miles",
                    },
                ],
            },
            {
                category: "Commercial Area",
                locations: [
                    { name: "Welleby Plaza", distance: "0.268 miles" },
                ],
            },
            {
                category: "Pitch",
                locations: [
                    { name: "Pitch", distance: "0.268 miles" },
                    { name: "Pitch", distance: "0.275 miles" },
                    { name: "Pitch", distance: "0.285 miles" },
                ],
            },
        ]
    };

    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true)
                const listingId = params.listingId
                //Recently viewed
                const existingListingIds = localStorage.getItem('listingIds');
                console.log("EXISTING IDS ARE---->", existingListingIds)

                let listingIds = [];

                if (existingListingIds) {
                    listingIds = JSON.parse(existingListingIds);
                }

                if (listingIds.includes(listingId)) {
                    listingIds.splice(listingIds.indexOf(listingId), 1);
                }

                listingIds.unshift(listingId);
                if (listingIds.length > 4) {
                    listingIds.pop();
                }

                localStorage.setItem('listingIds', JSON.stringify(listingIds));

                const { data } = await axios.get(`${backendURL}/api/listing/get/${listingId}`,)
                if (data.success) {
                    setLoading(false)
                    setListing(data.listing)
                }
                else {
                    setLoading(false)
                    console.log(data.message)
                }
            }
            catch (e) {
                setLoading(false)
                console.log(e);
            }
        }
        fetchListing()
    }, [params.listingId, backendURL])

    if (loading || !listing) {
        return <LoadingScreen />
    }
    return (
        <div className="min-h-screen flex flex-col justify-center mt-20 px-20">
            <div className="flex flex-col lg:flex-row">
                {/* Left Section */}
                <div className="flex-1 p-6">
                    {/* For Rent Label */}
                    <div className='flex justify-between items-center'>
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded">
                            FOR {listing.status}
                        </span>
                        <div className='flex gap-6'>
                            <button aria-label="Compare"
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                data-tooltip-id="compare-tooltip"
                                data-tooltip-content="Compare"
                            >
                                <FaCodeCompare className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                            </button>
                            <Bookmark listing={listing} />
                            <button onClick={() => {
                                const shareData = {
                                    title: document.title,
                                    text: "Check out this link!",
                                    url: window.location.href,
                                };

                                if (navigator.share) {
                                    navigator.share(shareData)
                                        .then(() => console.log("Shared successfully"))
                                        .catch((error) => console.log("Error sharing:", error));
                                } else {
                                    navigator.clipboard.writeText(window.location.href)
                                        .then(() => alert("Link copied to clipboard!"))
                                        .catch((error) => console.error("Failed to copy:", error));
                                }

                            }} aria-label="Share" className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                data-tooltip-id="share-tooltip"
                                data-tooltip-content="Share"
                            >
                                <CiShare2 className="w-5 h-5 text-gray-600 hover:text-green-600" />
                            </button>
                        </div>
                        {/*     Tooltips  */}
                        <Tooltip id="compare-tooltip" className="!bg-gray-800 !text-white !rounded-md !px-3 !py-2"
                            place="top" />
                        <Tooltip id="favorite-tooltip" className="!bg-gray-800 !text-white !rounded-md !px-3 !py-2"
                            place="top" />
                        <Tooltip id="share-tooltip" className="!bg-gray-800 !text-white !rounded-md !px-3 !py-2"
                            place="top" />
                    </div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mt-4">{listing.title}</h1>
                    {/* Image */}
                    <ImageListShow imagesList={listing.images} />
                    {/* Price */}
                    <p className="text-2xl font-semibold text-gray-700 mt-2">₹{formatNumber(listing.price)}</p>
                    <div>
                        {/* Features */}
                        <div className="mt-4 flex items-center space-x-6 text-gray-700">
                            <div className="flex items-center space-x-2">
                                <BedIcon className="w-5 h-5 text-blue-500" />
                                <span className="text-center text-gray-800 font-medium">{listing.bedrooms} Bedrooms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdBathtub className="w-5 h-5 text-blue-500" />
                                <span className="text-center text-gray-800 font-medium">{listing.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <AreaIcon className="w-5 h-5 text-blue-500" />
                                <span className="text-center text-gray-800 font-medium">{listing.size} SqFt</span>
                            </div>
                        </div>
                        {/* Description */}
                        <h2 className="text-xl font-semibold my-4 text-gray-900">Description</h2>
                        <p className=" text-gray-700 leading-relaxed">
                            {listing.description}
                        </p>
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                    {/* Overview Section */}
                    <h2 className="text-xl font-semibold my-4">Overview</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div><span className="font-bold">Floor No:</span> <span>{(listing.floor_number)}</span> </div>
                        <div><span className="font-bold">Bedrooms:</span> {listing.bedrooms}</div>
                        <div><span className="font-bold">Bathrooms:</span> {listing.bathrooms}</div>
                        <div><span className="font-bold">No. of Parking Spaces:</span> {listing.no_of_parking_spaces}</div>
                        <div><span className="font-bold">No. of Service Quarters:</span> {listing.no_of_service_quarter}</div>
                        <div><span className="font-bold">Size:</span> {listing.size} SqFt</div>
                        <div><span className="font-bold">Type: </span>
                            {listing.type.map((option, index) => (
                                <span key={index}>{option.label}{index < listing.type.length - 1 ? ', ' : ' '}</span>
                            ))}
                        </div>
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                    {listing.video_url &&
                        <div>
                            {/* Video Section */}
                            < h2 className="text-xl font-semibold my-4">Video</h2>
                            <iframe
                                src={`https://www.youtube.com/embed/${listing.video_url.split('v=')[1].split('&')[0]}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                                className="rounded-lg shadow-md w-full h-64 sm:h-80 lg:h-96 object-cover"
                            />
                            <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                        </div>
                    }
                    {/* Property Details Section */}
                    <h2 className="text-xl font-semibold my-4">Property Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div><span className="font-bold">Property ID:</span> {listing._id}</div>
                        <div><span className="font-bold">Bedrooms:</span> {listing.bedrooms}</div>
                        <div><span className="font-bold">Price:</span> ₹{formatNumber(listing.price)}</div>
                        <div><span className="font-bold">Bathrooms:</span> {listing.bathrooms}</div>
                        <div><span className="font-bold">Size:</span> {listing.size} SqFt</div>
                        <div><span className="font-bold">Floor Number:</span> {listing.floor_number}</div>
                        <div><span className="font-bold">No. of Parking Spaces:</span> {listing.no_of_parking_spaces}</div>
                        <div><span className="font-bold">No. of Service Quarters:</span> {listing.no_of_service_quarter}</div>
                        <div><span className="font-bold">Year Built:</span> {listing.yearBuilt}</div>
                        <div><span className="font-bold">Status:</span> For {listing.status.toUpperCase()}</div>
                        <div><span className="font-bold">Furnishing Status:</span> {listing.furnishing_status}</div>
                        <div><span className="font-bold">Construction Status:</span> {listing.construction_status}</div>
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />

                    {/* Amenities Section */}
                    <h2 className="text-xl font-semibold my-4">Amenities and Features</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {listing.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                {getAmenityIcon(amenity.label)}
                                <span>{amenity.label}</span>
                            </div>
                        ))}
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />

                    {/* Map Section */}
                    <h2 className="text-xl font-semibold my-4">Map</h2>
                    <div className="rounded overflow-hidden">
                        <img
                            src="https://via.placeholder.com/600x300"
                            alt="Map Thumbnail"
                            className="w-full"
                        />
                    </div>


                    <div className='flex'>
                        <div className='flex-1 py-2'>
                            <p className='font-[600]'>Neighborhood:</p>
                            <p>{listing.neighborhood}</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-[600]'>Postal Code:</p>
                            <p>{listing.zip_code}</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-[600]'>Country:</p>
                            <p>{listing.country}</p>
                        </div>
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                    {/* 360 Virtual Tour Section */}
                    {listing.virtual_tour_360 && <div><h2 className="text-xl font-semibold my-4">360 Virtual Tour</h2>
                        <div className="rounded overflow-hidden">
                            <img
                                src="https://via.placeholder.com/600x300"
                                alt="360 Virtual Tour"
                                className="w-full"
                            />
                        </div>
                        <hr className='my-5 h-0.5 bg-gray-300 border-none' /></div>}
                    <LoanCalculator />

                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                    {/* Nearby Section */}
                    <h2 className="text-xl font-semibold mb-4">What's Nearby?</h2>
                    <p className="text-gray-600 my-4">
                        Explore nearby amenities to precisely locate your property and identify surrounding conveniences, providing a comprehensive overview of the living environment and the property's convenience.
                    </p>
                    <div className="flex flex-wrap">
                        {listing.whats_nearby.map((amenity, index) => (
                            <div key={index} className="mb-6 w-1/2">
                                <h3 className="text-lg font-semibold mb-2">{amenity.category}</h3>
                                <ul className="list-disc ml-6">
                                    {amenity.locations.map((location, idx) => (
                                        <li key={idx} className="text-gray-800">
                                            {location.name} - <span className="text-gray-500">{location.distance}km</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <hr className='my-5 h-0.5 bg-gray-300 border-none' />
                    <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">Featured Properties</p>
                    <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">Recommended For You</h1>

                    <div className="md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 flex flex-col gap-6 ">
                        {houses.map((house) => {
                            return (
                                <HouseCard
                                    key={house.id}
                                    image={house.image}
                                    status={house.status}
                                    city={house.city}
                                    district={house.district}
                                    street={house.street}
                                    title={house.title}
                                    price={house.price}
                                    bedrooms={house.bedrooms}
                                    bathrooms={house.bathrooms}
                                    area={house.area}
                                    agentId={house.agentId}
                                />
                            )
                        })}

                        <div></div>
                    </div>

                </div>

                {/* Right Section */}
                <ListingSearchPage image1={image1} propertyOptions={propertyOptions} />
            </div>
        </div >
    )
}