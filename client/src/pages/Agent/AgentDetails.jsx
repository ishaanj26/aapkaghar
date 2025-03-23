import { useNavigate, useParams } from "react-router"
import Footer from "../../components/Footer/Footer"
import { OUR_TEAM } from "../../data";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AgentDetails() {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    const agent = OUR_TEAM.find((agent) => agent.id === (id));


    return (
        <div>
            <header className="mt-20 p-6 bg-white shadow w-full">
                <div className="container mx-auto py-6 px-4 text-center">
                    <h1 className="text-4xl mb-3 font-bold text-gray-800">Our Agent Details</h1>
                    <p className="text-gray-500"><span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>  &gt;
                        <span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/agents') }}> Agents</span>  &gt; Agent Details</p>

                </div>
            </header>
            {!agent ? (
                <p className="p-6 text-xl">Agent not found!</p>
            ) : <div className="p-6">
                <div className="border rounded-lg p-6 shadow-md">
                    <div className="flex items-center space-x-6">
                        <img
                            src={agent.url}
                            alt={agent.name}
                            className="min-w-[25vw] h-[50vh] rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
                        />
                        <div className="p-5">
                            <h1 className="text-3xl font-bold">{agent.name}</h1>
                            <p className="text-lg text-gray-600">{agent.position} at AapKaGhar</p>
                            <p className="text-sm text-gray-500">{agent.contact.phoneNumber}</p>
                            <p className="text-sm text-gray-500">{agent.contact.gmail}</p>
                            <div className="flex gap-5 mt-5 ">
                                <a
                                    href="https://www.instagram.com/your-instagram-handle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-600 hover:text-blue-900 transition duration-300"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://twitter.com/your-twitter-handle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-600 hover:text-blue-900 transition duration-300"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/your-linkedin-handle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-600 hover:text-blue-900 transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://www.facebook.com/your-facebook-handle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-gray-600 hover:text-blue-900 transition duration-300"
                                >
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">About {agent.name}</h2>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            }
            <Footer />
        </div >
    )
}