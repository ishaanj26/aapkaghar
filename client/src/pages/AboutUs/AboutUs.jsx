import { useNavigate } from "react-router"
import Footer from "../../components/Footer/Footer"
import BenefitSection from "../Home/BenefitSection/BenefitSection"
import OurTeam from "../Home/OurTeam/OurTeam"
import Brands from "../Home/BrandsSupport/BrandsSupport"
import Form from "../../components/Form/Form"
import Housephoto from "../../assests/logo/business-shaking-hands-illustration-ai-generated-image_20029-5014.avif"



export default function AboutUS() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="min-h-screen my-20 bg-gray-50 flex flex-col items-center">
                <header className="bg-white shadow w-full">
                    <div className="container mx-auto py-6 px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                        <p className="text-gray-500"><span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>  &gt; About Us</p>
                    </div>
                </header>
                <div className="p-10 flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="text-center md:text-left md:w-1/2 md:pr-8">
                        <h1 className="text-4xl font-bold mb-4">Welcome To AapKaGhar</h1>
                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Welcome to AapKaGhar, where we turn houses into homes and dreams into reality. At AapKaGhar, we understand that a home is more than just a physical space; it's a place where memories are created, families grow, and life unfolds.
                        </p>
                        <a
                            href="/contacts"
                            className="inline-block mt-4 text-blue-500 font-medium hover:underline"
                        >
                            Contact Us →
                        </a>
                    </div>

                    <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
                        <iframe
                            src="https://www.youtube.com/embed/0IMfPwcLU1U"
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg shadow-md w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />
                    </div>
                </div>


                <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 py-12">
                    <div className="container mx-auto flex flex-wrap flex-col md:flex-row md:items-start">
                        {/* Left Section */}
                        <div className="text-center mb-12 md:w-1/2 md:pr-8">
                            <h2 className="text-lg sm:text-xl text-blue-600 font-semibold mb-2">WHY CHOOSE US</h2>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
                                Discover What Sets Our Real Estate Expertise Apart
                            </h1>
                            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
                                At AapKaGhar, our unwavering commitment lies in crafting unparalleled real estate journeys. Our seasoned professionals, armed with extensive market knowledge, walk alongside you through every phase of your property endeavor. We prioritize understanding your unique aspirations, tailoring our expertise to match your vision.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-700 font-medium text-sm sm:text-base">Transparent Partnerships</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-700 font-medium text-sm sm:text-base">Proven Expertise</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-700 font-medium text-sm sm:text-base">Customized Solutions</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <p className="text-gray-700 font-medium text-sm sm:text-base">Local Area Knowledge</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <a
                                    onClick={() => navigate('/contacts')}
                                    className="cursor-pointer text-blue-600 font-semibold text-sm sm:text-lg hover:underline"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        {/* Right Section - Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 w-full md:w-1/2">
                            {/* Buy a New Home Card */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="text-gray-700 font-semibold text-base sm:text-lg mb-4">Buy A New Home</div>
                                <p className="text-gray-600 text-sm mb-6">
                                    With thousands of homes for sale, AapKaGhar can match you with a house you want.
                                </p>
                                <a
                                    href="#buy"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                            {/* Rent a Home Card */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="text-gray-700 font-semibold text-base sm:text-lg mb-4">Rent A Home</div>
                                <p className="text-gray-600 text-sm mb-6">
                                    With filters and custom keyword searches, AapKaGhar helps you easily find a house you’ll love.
                                </p>
                                <a
                                    href="#rent"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                            {/* Sell a Home Card */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="text-gray-700 font-semibold text-base sm:text-lg mb-4">Sell A Home</div>
                                <p className="text-gray-600 text-sm mb-6">
                                    With quick support, AapKaGhar can help you easily sell your home or apartment quickly.
                                </p>
                                <a
                                    href="#sell"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <BenefitSection />
                <div className="bg-gray-100 py-10 flex flex-col lg:flex-row items-center justify-center w-full">
                    <div className="p-6 max-w-md w-full text-center lg:text-left">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            We are always eager to hear from you! At AapkaGhar, we understand that buying or selling a home is a significant decision. Our team of experienced brokers is dedicated to providing personalized service every step of the way.
                        </p>
                    </div>
                    <div className="w-full max-w-sm mt-8 lg:mt-0">
                        <Form />
                    </div>
                </div>
                <OurTeam />
                {/* Become Partners Section */}
                <div className="bg-gray-50 py-12 mx-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="text-center md:text-left md:w-1/2">
                            <h2 className="text-blue-600 font-semibold text-lg mb-2">BECOME PARTNERS</h2>
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                                List Your Properties On AapKaGhar, Join Us Now!
                            </h1>
                            <a
                                href="#become-agent"
                                className="bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
                            >
                                Become An Agent
                            </a>
                        </div>
                        <div className="md:w-1/3 mt-8 md:mt-0 bg-none">
                            <img
                                src={Housephoto} // Replace with the actual image URL
                                alt="Property"
                                className="rounded-xl "
                            />
                        </div>
                    </div>
                </div>

            </div>

            <Brands />
            <Footer />
        </div>
    )
}