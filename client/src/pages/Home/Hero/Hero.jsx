import Button from "../../../components/Buttons/Button";
import { SearchInput } from "../../../components/Search/Search";
import { useScrollPosition } from "../../../components/Hooks/hook";
import { useState } from "react";

export default function Hero() {
  const pos = useScrollPosition(0.5);
  const [activeButton, setActiveButton] = useState('For Rent');
  const [searchValue, setSearchValue] = useState('');
  const handleButtonClick = (value) => {
    setActiveButton(value);
    setSearchValue(value);
  };
  return (
    <div
      style={{ backgroundPositionY: pos }}
      className="bg-hero min-h-screen bg-hero bg-center bg-cover bg-blend-darken bg-black/25 flex flex-col justify-center items-center px-3 md:px-5">
      <h1
        className="mt-20 lg:text-[5rem] text-[3rem] md:text-[4rem] font-bold text-white text-center  px-20"
      >Find your
        Perfect home!</h1>
      <p className="text-white max-w-[700px] text-center mt-4 md:mt-6 px-6 lg:text-[15px] text-[13px]">We are a real estate agency that will help you find the best residence you dream of,
        let’s discuss for your dream house?
      </p>
      <div className="flex gap-6 md:gap-9 mt-8 md:mt-[100px] flex-wrap justify-center">
        <Button isActive={activeButton === 'For Rent'} variant="outlined" text="For Rent" onClick={() => handleButtonClick('For Rent')} />
        <Button isActive={activeButton === 'For Sale'} variant="outlined" text="For Sale" transparent onClick={() => handleButtonClick('For Sale')}
        />
      </div>
      <SearchInput  value={searchValue} />
    </div>
  )
}