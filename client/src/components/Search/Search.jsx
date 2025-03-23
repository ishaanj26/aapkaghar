import { HouseTypeDropdown } from "./HouseTypeDropDown"
import { MdSettings, MdSearch } from 'react-icons/md';

import Button from '../Buttons/Button'
import { useState } from "react"
import AdvancedSearch from "./AdvanceSeach/AdvancedSearch";
export const SearchInput = ({value}) => {

    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false)
    return (
        <div className="lg:h-[92px] mt-[20px] bg-white lg:rounded-3xl 
    flex mb-4 items-center flex-col relative rounded-2xl w-full max-w-[45rem] lg:max-w-[1280px]">
            <div className="flex flex-col lg:flex-row gap-6 items-center mb-5 xl:px-[40px] md:border-none
      w-full px-4">
                <div className="flex flex-col  xl:border-r-2 px-3 xl:mr-4 w-full gap-2">
                    <p className="text-gray-400 text-sm font-[500]">Type</p>
                    <HouseTypeDropdown />
                </div>
                <div className="flex flex-col xl:border-r-2 px-3 xl:mr-6 w-full gap-2">
                    <p className="text-gray-400 text-sm font-[500]">Location</p>
                    <input className="inline-flex justify-between gap-x-1.5 rounded-3xl border-[1px]
              xl:rounded-none w-full px-4 md:px-3 xl:px-0 py-2 text-md 
            text-gray-900 shadow-sm lg:shadow-none placeholder-gray-900 md:border-none
              outline-none"

                        placeholder="Search Location"
                        type="text"
                    // value={locationQuery}
                    // onChange={(e)=>updateFilters({locationQuery: e.target.value})} 
                    />
                </div>
                <div className="flex flex-col xl:mr-6 gap-2 px-3 w-full py-3">
                    <p className="text-gray-400 text-sm font-[500]">Keyword</p>
                    <input className="inline-flex justify-between gap-x-1.5 rounded-3xl border-[1px]
                    xl:rounded-none w-full px-4 md:px-3 xl:px-0 py-2 text-md 
                    text-gray-900 shadow-sm lg:shadow-none placeholder-gray-900 md:border-none
                     outline-none" placeholder="Search Keyword"
                        type="text"
                    // value={searchQuery} 
                    // onChange={(e) => {
                    //     updateFilters({searchQuery: e.target.value})

                    //     }} 
                    />
                </div>
                <div className="flex gap-3 items-center justify-center w-full lg:w-auto">
                    <Button onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)} rightIcon={<MdSettings className="inline w-5 h-5" />} transparent text="Search Advanced" />
                    <Button rightIcon={<MdSearch className="inline w-5 h-5" />} text="Search" />
                </div>
            </div>


            {isAdvancedSearchOpen && <AdvancedSearch isOpen={isAdvancedSearchOpen} />}
        </div >

    )
}