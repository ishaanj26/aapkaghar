import { OUR_TEAM } from "../../../data";
import EmployeeCard from "./EmployeeCard";
import {
    FaPhone, FaEnvelope
} from 'react-icons/fa';

export default function OurTeam() {
    return (
        <div className="flex flex-col justify-center items-center pt-24 mb-20 px-5">
            <p className="text-blue-600 xl:text-[20px] text-[14px] font-500 uppercase">Our Team</p>
            <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold xl:mb9">Meet our Agents</h1>
            <div className="flex flex-col w-full  xl:flex-row gap-8">
                {
                    OUR_TEAM.map(({ name, position, url, socials }) => {
                        return (
                            <div className="md:grid md:grid-cols-2 flex flex-col cursor-pointer md:w-[60%] group gap-8 ">
                               
                                    <EmployeeCard
                                        employeeName={name}
                                        description={position}
                                        image={url}
                                        socials={socials}
                                    />
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className="font-[500] text-[24px]">{name}</p>
                                        <p className="text=[16px] text-gray-500 ">{position}</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='rounded-full flex items-center justify-content p-3 border-[1px] border-black group-hover:bg-blue-700 group-hover:border-blue-900'>
                                            <FaPhone className='group-hover:fill-white' />
                                        </div>
                                        <div className='rounded-full p-3 border-[1px] border-black group-hover:bg-blue-700 group-hover:border-blue-900'>
                                            <FaEnvelope className='group-hover:fill-white' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}