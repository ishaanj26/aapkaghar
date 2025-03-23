import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function EmployeeCard({ image, employeeName, socials }) {
  return (
    <div className="overflow-hidden rounded-2xl relative group">
      {/* Image */}
      <img
        src={image}
        alt={employeeName}
        className="rounded-2xl w-full object-cover group-hover:scale-105 
                   aspect-square md:aspect-[4/5] lg:aspect-[3/4] transition-transform duration-300 ease-in-out"
      />

      {/* Social Links */}
      <div
        className="absolute inset-x-0 mx-auto bottom-4 flex justify-between items-center max-w-[300px] sm:max-w-[250px] md:max-w-[200px]
                  rounded-xl bg-black/60 backdrop-blur-md h-12 px-4 opacity-0 group-hover:opacity-100 
                  transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
      >
        <a
          href={socials.facebook}
          className="flex-1 flex justify-center items-center border-r-[1px] border-[white]/50"
        >
          <FaFacebook className="h-5 hover:stroke-blue-700 hover:fill-blue-700" fill="white" />
        </a>
        <a
          href={socials.x}
          className="flex-1 flex justify-center items-center border-r-[1px] border-[white]/50"
        >
          <FaTwitter className="h-5 hover:stroke-blue-700 hover:fill-blue-700" fill="white" />
        </a>
        <a
          href={socials.insta}
          className="flex-1 flex justify-center items-center border-r-[1px] border-[white]/50"
        >
          <FaInstagram className="h-5 hover:stroke-blue-700 hover:fill-blue-700" fill="white" />
        </a>
        <a
          href={socials.linkedIn}
          className="flex-1 flex justify-center items-center"
        >
          <FaLinkedin className="h-5 hover:stroke-blue-700 hover:fill-blue-700" fill="white" />
        </a>
      </div>
    </div>
  );
}
