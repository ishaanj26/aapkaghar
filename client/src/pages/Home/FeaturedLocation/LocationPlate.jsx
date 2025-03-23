import { FaArrowRight  } from "react-icons/fa"

export const LocationPlate= ({image,location, index,direction}) => {
    return (
        <div 
        className={`${image} max-w-[45%]  h-full w-full  bg-cover bg-center 
        p-2 rounded-xl flex flex-col justify-end cursor-pointer group animate-slideInRight
        ${direction} === 'next' ? 'animate-slideInRight' : 'animate-slideOutLeft'`}
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'both'
        }}
        >
          <div className="bg-white rounded-xl p-4 flex justify-between items-center">
            <div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">AapkaGhar</p>
            <p className="font-[500] text-xs sm:text-sm md:text-base lg:text-lg">{location}</p>
            </div>
            <div className="border rounded-full p-3  group-hover:bg-blue-600 transition-colors duration-150 ease-in">
              <FaArrowRight strokeColor="black" fill="black" className="group-hover:stroke-white group-hover:fill-white transition-colors duration-150 ease-in" />
            </div>
          </div>
        </div>
    )
}