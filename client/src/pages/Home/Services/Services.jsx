import { OUR_SERVICES } from "../../../data"

import { Button } from "../../../components/Buttons/Button";
import { FaArrowRight  } from "react-icons/fa"

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
         <p className="text-blue-600 xl:text-[20px] text-[14px] font-[500] uppercase">Our Services</p>
         <h1 className="xl:text-[34px] text-[1.6rem] mb-9 font-bold">What We Do?</h1>
         <div className="flex flex-col xl:flex-row gap-5">
            {OUR_SERVICES.map(({img,title,description}, index) => {
                return ( <ServicePlate key={index} img={img} title={title} description={description} />)
            })}
            
         </div>
    </div>
  )
}

export const ServicePlate = ({img,title,description}) => {
  return (
    <div className="border flex flex-col py-12 px-8 justify-center items-center text-center gap-[30px] rounded-2xl group hover:shadow-2xl 
    transition-all duration-300 ease-in-out xl:hover:scale-105">
        <img src={img} alt={title} />
        <p className="font-[500] xl:text-[24px] text-[18px]">{title}</p>
        <p className="max-w-[350px] text-[14px] text-gray-500">{description}</p>
        <Button 
            onClick={() => (console.log())} 
            rightIcon={<FaArrowRight strokeColor="black" fill="black" className="group-hover:stroke-white group-hover:fill-white"/>} 
            transparent  
            text="Learn More" 
            className="group-hover:px-[35px] group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 ease-in-out"
            />
    </div>
  )
}

 