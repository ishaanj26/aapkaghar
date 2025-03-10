import { useNavigate } from 'react-router'
import logo from '../../assests/logo/logo.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaYoutube, FaInstagram, FaPhoneVolume, FaEnvelope } from 'react-icons/fa'
import { MdLocationPin } from "react-icons/md";
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#000033] w-full text-white px-[10vw] py-5">
            {/* Logo Section */}
            <div className='flex items-center justify-between'>
                <img
                    src={logo}
                    alt="AapkaGhar Logo"
                    className='cursor-pointer w-[5.5rem] filter brightness-0 invert'
                    onClick={() => navigate('/')}
                />
                {/* Social Media Icons */}
                <div className="flex space-x-2 lg:space-x-4 p-4 items-center">
                    <p className='text-xs lg:text-[14px] text-center'>Follow us:</p>
                    {[
                        { icon: <FaFacebook />, link: "#" },
                        { icon: <FaLinkedin />, link: "#" },
                        { icon: <FaTwitter />, link: "#" },
                        { icon: <FaPinterest />, link: "#" },
                        { icon: <FaInstagram />, link: "#" },
                        { icon: <FaYoutube />, link: "#" }
                    ].map(({ icon, link }, index) => (
                        <div
                            key={index}
                            className="w-12 h-12 bg-white/20 rounded-full flex justify-center items-center hover:bg-blue-600 transition-all"
                            aria-label={`Follow us on ${link}`}
                        >
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">
                                {icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-gray-200 mt-5"></div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-8">
                <div className='flex-1'>
                    <p className='text-gray-100 text-sm mb-2'>
                        Specialized in providing residential or commercial houses at the most affordable prices.
                    </p>
                    <div className='flex items-center gap-2 mb-2'>
                        <MdLocationPin className="text-lg" />
                        <p className='text-white text-sm'>Green Park Main, New Delhi-110016</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaPhoneVolume className="text-lg" />
                        <p className='text-white text-sm'>9811559966</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaEnvelope className="text-lg" />
                        <p className='text-white text-sm'>gluck510@gmail.com</p>
                    </div>
                </div>
                <Item Links={CATEGORIES} title="CATEGORIES" />
                <Item Links={COMPANY} title="OUR COMPANY" />
                <Item Links={NEWSLETTER} title="NEWSLETTER" />
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 bg-gray-200"></div>

            {/* Footer Bottom Section */}
            <div className='flex justify-between py-5'>
                <p className='text-[10px] xl:text-sm'>©2025 AapKaGhar. All Rights Reserved.</p>
                <div className='flex'>
                    {[
                        { name: 'Terms and Services', link: '/terms' },
                        { name: 'Privacy Policy', link: '/privacy-policy' },
                        { name: 'Cookie Policy', link: '/cookie-policy' }
                    ].map(({ name, link }, index) => (
                        <a key={index} onClick={() => navigate(link)}>
                            <p className='hover:text-blue-400 hover:cursor-pointer duration-300 text-[9px] xl:text-sm border-r-[1px] px-2'>
                                {name}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Reusable Item Component
export const Item = ({ Links, title }) => {
    const navigate = useNavigate();
    return (
        <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
                <li key={link.name}>
                    <a
                        className="text-gray-400 hover:text-blue-400 duration-500 text-sm cursor-pointer leading-6"
                        onClick={() => navigate(`/${link.link}`)}
                    >
                        {link.name}
                    </a>
                    {link.inputText && (
                        <form onSubmit={() => { }}>
                            <div className='w-full flex items-center'>
                                <FaEnvelope className="text-xs" />
                                <input
                                    type="text"
                                    className="mt-2 mx-2 lg:w-[60%] sm:w-[70%] w-[30%] h-8 bg-transparent rounded-md p-1 outline-none text-gray-400 hover:text-blue-400 duration-300 text-sm leading-6"
                                    placeholder={link.inputText}
                                />
                                <button type="submit" className="mt-2 bg-transparent text-white text-xs py-2 hover:text-blue-400 duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </li>
            ))}
        </ul>
    );
};

// Sample Data for Links
export const CATEGORIES = [
    { name: "Pricing Plans", link: "pricing-plans" },
    { name: "Our Services", link: "our_services" },
    { name: "About Us", link: "about-us" },
    { name: "Contact Us", link: "contacts" },
];

export const COMPANY = [
    { name: "Property For Sale", link: "#" },
    { name: "Property For Rent", link: "#" },
    { name: "Property For Buy", link: "#" },
    { name: "Our Agents", link: "#" },
];

export const NEWSLETTER = [
    {
        name: "Your Weekly/Monthly Dose of Knowledge and Inspiration",
        inputText: "Your Email Address"
    },
];
