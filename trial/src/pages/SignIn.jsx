import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AppContent } from '../context/AppContext';

export default function SignIn() {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setIsLoggedIn,getUserData,userData}=useContext(AppContent)

    // useEffect(() => {
    //     console.log("Data after updated ---->", userData);
    //   }, [userData]);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post('http://localhost:3000/api/auth/login', { email, password })
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
                navigate('/')
                }
            else {
                setError(data.message)
            }

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Log In</h1>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4'>
                <input
                    value={email}
                    type='email'
                    placeholder='email'
                    className='border p-3 rounded-lg width-100%'

                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type='password'
                    value={password}
                    placeholder='password'
                    className='border p-3 rounded-lg'
                    onChange={e => {
                         setPassword(e.target.value);
                    }}
                    />

                <button
                    className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                > Sign In
                </button>
                <p onClick={() => navigate('/reset-password')} className='mb-4 text-indigo-500 hover:cursor-pointer'>Forgot Password?</p>

            </form>
            <div className='flex gap-2 mt-5'>
                <p>Dont have an account?</p>
                <span onClick={()=>navigate("/sign-up")} className='hover:cursor-pointer text-indigo-500'>Sign up</span>

            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}