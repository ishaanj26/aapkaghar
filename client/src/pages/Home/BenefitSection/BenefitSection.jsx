import HouseInteriorImage from '../../../assests/services/benefit1.avif';
import { BENEFIT_BOXES } from '../../../data';

export default function BenefitSection() {
  return (
    <div className="xl:min-h-[90vh] flex px-2">
      <img className='xl:w-[50%] w-[40%] xl:rounded-l-2xl rounded-t-2xl xl:m-0 ' src={HouseInteriorImage} alt='House interior' />
      <div className='xl:pl-[95px] px-4 pt-[30px] w-full bg-slate-100 xl:rounded-r-2xl'>
        <p className="xl:text-left text-center text-blue-600 xl:text-[16px] text-[12px] font-500 uppercase">Our Benefit</p>
        <h1 className="xl:text-left text-center xl:text-[28px] text-[1.4rem] mb-9 font-bold text-gray-800 xl:mb-7">Why Choose Us?</h1>
        <p className="xl:text-left text-center md:text-[12px] text-[10px] text-gray-500 mb-6">Our seasoned team excels in real estate with years of successful market
          navigation, offering informed decisions and optimal results.</p>
        <div className='flex flex-col xl:items-start items-center'>
          {BENEFIT_BOXES.map(({ icon, title, description }, index) => {
            return (<BenefitBox key={index} img={icon} title={title} description={description} />);
          })}
        </div>
      </div>
    </div>
  );
}

export const BenefitBox = ({ img, title, description }) => {
  return (
    <div className="flex items-center gap-9 rounded-2xl p-5 cursor-pointer group hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <img className="group-hover:animate-rotate-360 transition duration-2000" src={img} width={50} height={50} alt={title} />
      <div className="flex flex-col">
        <p className="xl:text-[16px] md:text-[14px] text-[12px] text-gray-800 font-[500]">{title}</p>
        <p className="md:text-[12px] text-[10px] text-gray-500 max-w-[386px]">{description}</p>
      </div>
    </div>
  );
}
