import { useContext, useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import { AppContent } from "../../context/AppContext";
import { FaHome, FaFileInvoice, FaHeart, FaSearch, FaStar, FaUser, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go'
import { RiDashboardLine } from 'react-icons/ri'
import axios from "axios";
import { useNavigate } from "react-router";
import AddProperties from "./sidebar/AddProperties/AddProperties";
import MyProperties from "./sidebar/MyProperties/MyProperties";
import MyFavorites from "./sidebar/MyFavorites/MyFavorites";
import { useLocation } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate()
    const { userData, setUserData, setIsLoggedIn, backendURL } = useContext(AppContent)
    const logout = async () => {
        try {
            console.log("Reached here")
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/logout`)
            if (data.success) {
                setIsLoggedIn(false)
                setUserData(false)
                navigate('/')
            }
            else {
                console.log(data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const [activeSidebarItem, setActiveSidebarItem] = useState("My Profile");
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash === "add_property") {
          setActiveSidebarItem("Add Property");
        } else if (!hash) {
          setActiveSidebarItem("My Profile");
        }
      }, [location]);
    return (
        <div className="mt-[60px] flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="lg:w-64 bg-white p-4 border-r border-blue-300">
                <h2 className="text-lg font-bold text-gray-700 mb-4">AapKaGhar</h2>
                <nav className="space-y-2">
                    <a href="#"

                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "Dashboards" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("Dashboards")}

                    >                        <RiDashboardLine className="mr-2" /> Dashboards
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "My Properties" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("My Properties")}
                    >                <FaHome className="mr-2" /> My Properties
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "My Invoices" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("My Invoices")}
                    ><FaFileInvoice className="mr-2" /> My Invoices
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "Packages" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("Packages")}
                    >                          <GoPackage className="mr-2" /> My Package
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "My Favorites" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("My Favorites")}
                    >                          <FaHeart className="mr-2" /> My Favorites
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "My Saved Searches" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("My Saved Searches")}
                    >                           <FaSearch className="mr-2" /> My Saved Searches
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "Reviews" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("Reviews")}
                    >                           <FaStar className="mr-2" /> Reviews
                    </a>
                    <a href="#"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "My Profile" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("My Profile")}
                    >                           <FaUser className="mr-2" /> My Profile
                    </a>
                    <a href="#"
                    id="add_property"
                        className={`text-[10px] lg:text-[15px] block px-4 py-2 text-gray-700 font-semibold  hover:bg-blue-100 rounded flex items-center ${activeSidebarItem === "Add Property" ? "bg-blue-200 text-blue-700" : ""
                            }`}
                        onClick={() => setActiveSidebarItem("Add Property")}
                    >                           <FaPlus className="mr-2" /> Add Property
                    </a>
                    <a onClick={logout} className="text-[10px] lg:text-[15px] cursor-pointer block px-4 py-2 text-gray-700 font-semibold hover:bg-red-100 rounded flex items-center">
                        <FaSignOutAlt className="mr-2" /> LogOut
                    </a> </nav>
            </aside>

            {/* Main Content */}
            {
                !userData ? <main className="flex-1 p-6">
                    <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                        <p className="bg-yellow-100 border border-yellow-300 text-[#3e2723] p-3 rounded">You need login to continue.</p>
                        <div className="mt-4 flex space-x-4">
                            <Button onClick={()=>{navigate('/sign-in')}} text="Login Or Register" />
                            <Button  onClick={()=>{navigate('/')}}  text="Home Page" transparent />
                        </div>
                    </div>
                </main> :
                    <main className="flex-1 p-6">
                        {activeSidebarItem === "Dashboards" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">Dashboards</h2>
                                <p className="text-gray-700">This is the content of the Dashboards page.</p>
                            </div>
                        )}
                        {activeSidebarItem === "Packages" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">Packages</h2>
                                <p className="text-gray-700">This is the content of the Packages page.</p>
                            </div>
                        )}
                        {activeSidebarItem === "My Properties" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">My Properties</h2>
                                <MyProperties />
                            </div>
                        )}
                        {activeSidebarItem === "My Favorites" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">My Favorite</h2>
                                <MyFavorites />
                            </div>
                        )}
                        {activeSidebarItem === "My Invoices" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">My Invoices</h2>
                                <p className="text-gray-700">This is the content of the My Invoices page.</p>
                            </div>
                        )}
                        {activeSidebarItem === "My Saved Searches" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">My Saved Searches</h2>
                                <p className="text-gray-700">This is the content of the My Saved Searches page.</p>
                            </div>
                        )} {activeSidebarItem === "Reviews" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">Reviews</h2>
                                <p className="text-gray-700">This is the content of the Reviews page.</p>
                            </div>
                        )} {activeSidebarItem === "My Profile" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">My Profile</h2>
                                <p className="text-gray-700">This is the content of the My Profile page.</p>
                            </div>
                        )} {activeSidebarItem === "Add Property" && (
                            <div className="bg-white p-6 rounded-lg shadow border border-blue-300">
                                <h2 className="text-lg font-bold text-gray-700 mb-4">Add Property</h2>
                                <AddProperties />
                            </div>
                        )}
                    </main>
            }

        </div >
    );
}
