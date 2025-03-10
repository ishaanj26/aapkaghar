import {
    MdLocationOn as LocationIcon,
    MdBed as BedIcon,
    MdBathtub,
    MdOutlineSquareFoot as AreaIcon
} from 'react-icons/md';
import { formatNumber } from "../../../FormatNumber";
import { useNavigate } from 'react-router';


export function HouseCard({
    image,
    status,
    city,
    district,
    street,
    title,
    price,
    bedrooms,
    bathrooms,
    area,
    agentId,
    listingId,
    address
}) {
    const navigate=useNavigate()
    return (
        <div onClick={()=>{navigate(`listing/${listingId}`)}} className="group flex flex-col gap-4 rounded-xl border border-gray-300 hover:cursor-pointer">
            <div className="relative rounded-t-xl group overflow-hidden">
                <img className="w-full h-[270px] rounded-t-xl transition-transform duration-300 group-hover:scale-110" src={image} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-t rounded-t-xl  from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-gray-800 hover:bg-neutral-900 rounded-lg px-2 shadow-md ">
                    <span className="text-sm font-medium px-1 text-white cursor-pointer">FOR {status.toUpperCase()}</span>
                </div>

                <span className="absolute bottom-4 left-4 text-white text-[.9rem] "
                ><LocationIcon viewBox="0 0 28 28" strokeColor="white" className="inline-block" /> {district}, {city}</span>
            </div>
            <div className="px-6 flex flex-col ">
                <p className="font-[500] xl:text-[20px] cursor-pointer group-hover:text-blue-500  mb-2">{title}</p>
                <div className="flex gap-3 border-b-2 pb-5 xl:text-[16px] text-[14px]">
                    <div>
                        <p className=" text-gray-700">
                            <BedIcon
                                className="inline w-5 h-5 text-blue-500"
                                strokeColor="black"
                            /> Beds:  <span className='font-semibold text-[black]  lg:text-[16px] text-[14px]'>{bedrooms}</span></p>
                    </div>
                    <div>
                        <p className="text-gray-700">
                            <MdBathtub
                                className="inline w-5 h-5 text-blue-500"
                                strokeColor="black" /> Baths:  <span className='font-semibold lg:text-[16px] text-[14px] text-[black]'>{bathrooms}</span></p>
                    </div>
                    <div>
                        <p className=" text-gray-700">
                            <AreaIcon
                                className="inline w-5 h-5 text-blue-500"
                                strokeColor="black"
                            /> Sqft: <span className='font-semibold text-[black]  lg:text-[16px] text-[14px]'>{area}</span>  </p>
                    </div>
                </div>
                <div className="flex justify-between mt-5 pb-5">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-black h-[40px] w-[40px]"></div>
                        <p className="xl:text-[16px] text-[14px]">{agentId}</p>
                    </div>
                    <p className=" font-[500]">₹{formatNumber(price)}</p>
                </div>
            </div>
        </div>
    )
}
