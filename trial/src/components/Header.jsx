import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Header() {
  const { userData, setUserData, setIsLoggedIn } = useContext(AppContent)
  const navigate = useNavigate()

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
          // onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          {userData ?
            <div className="h-8 w-8 flex justify-center items-center rounded-full bg-black text-gray-200 relative group
               hover:bg-gray-800 cursor-pointer transition duration-300">
              {userData.name[0].toUpperCase()}
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
                <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
                  {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>}
                  <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Listings</li>
                  <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
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