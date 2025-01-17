import { FaSearch, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { BsHouseDown } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Header() {
  const { backendURL, userData, setUserListings, setUserData, setIsLoggedIn } = useContext(AppContent)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post('http://localhost:3000/api/auth/send-verify-otp')
      if (data.success) {
        toast.success(data.message)
        navigate('/email-verify')
      }
      else {
        console.log(data.message)
      }

    } catch (e) {
      console.log(e)
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post('http://localhost:3000/api/auth/logout')
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

  const handleShowListings = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.get(`${backendURL}/api/user/listings/${userData._id}`)

      if (data.success) {
        setUserListings(data.listings)
        navigate("/my-listings")
      }
      else {
        toast.error(data.message)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl)
  }, [window.location.search])

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <img src={assets.logo} alt="" />
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>GoodLuck</span>
            <span className='text-slate-700'>Logistics</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 items-center'>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          {userData ?
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-black text-gray-200 relative group
               hover:bg-gray-800 cursor-pointer transition duration-300">
              {userData.name[0].toUpperCase()}
              <FaCaretUp className="absolute -bottom-2 -right-2 text-xl text-black z-20  group-hover:hidden " /> {/* Arrow up icon */}
              <BsHouseDown className="absolute -bottom-1 -right-1 text-xs text-black z-20 hidden group-hover:block" />
              <div className='absolute hidden group-hover:block top-9 right-0 z-50 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                <ul className='list-none m-0 p-2 min-w-[160px]'>
                  {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-2 px-4 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 rounded-md transition-colors duration-200'>Verify Email</li>}

                  {userData.isAccountVerified && <li onClick={handleShowListings}
                    className='py-2 px-4 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 rounded-md transition-colors duration-200'>Show Listings</li>}
                  {userData.isAccountVerified && <li onClick={() => {
                    navigate("/create-listing")
                  }} className='py-2 px-4 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 rounded-md transition-colors duration-200'>Create Listings</li>}
                  {userData.isAccountVerified && <li onClick={() => {
                    navigate("/profile")
                  }} className='py-2 px-4 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 rounded-md transition-colors duration-200'>Show My Profile</li>}
                  {userData.isAccountVerified && <li onClick={() => {
                    navigate("/bookmarks")
                  }} className='py-2 px-4 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 rounded-md transition-colors duration-200'>Show BookMarks</li>}

                  <li onClick={logout} className='py-2 px-4 hover:bg-red-50 cursor-pointer text-sm text-red-600 rounded-md transition-colors duration-200'>Logout</li>
                </ul>
              </div>
            </div>
            :
            <Link to='/sign-in'>
              <li className='flex gap-1 text-slate-700 border border-gray-500 rounded-full px-6 py-2 hover:bg-gray-100'>
                Login <img src={assets.arrow_icon} />
              </li>
            </Link>}
        </ul>
      </div >
    </header >
  );
}