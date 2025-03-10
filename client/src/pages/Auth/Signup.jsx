import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContent } from "../../context/AppContext";
import { toast } from 'react-toastify'
import OAuth from "./OAuth";
import Button from "../../components/Buttons/Button";

export default function SignUp() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setIsLoggedIn, getUserData, backendURL, userData } = useContext(AppContent)

    const handleSubmit = async (e) => {
        console.log("Reached here")
        e.preventDefault();//to prevent refereshing
        try {
            axios.defaults.withCredentials = true

            const { data } = await axios.post(`${backendURL}/api/auth/register`, { name, email, password })
            console.log(data)
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
                navigate('/')
            }
            else {
                toast.error(data.message)
            }
        } catch (e) {
            console.log(e)
        }
    }
    // Redirect to profile if user is already logged in
    useEffect(() => {
        if (userData) {
            navigate('/profile');
        }
    }, [userData, navigate]);
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='max-w-md w-full mx-auto p-4 bg-white rounded-lg shadow-md'>
                <h1 className='text-3xl text-center font-semibold my-7'>Create Your Account</h1>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4'>
                    <input
                        value={name}
                        type='text'
                        placeholder='Username'
                        className='border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'

                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        value={email}
                        type='email'
                        placeholder='Email'
                        className='border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type='password'
                        value={password}
                        placeholder='Password'
                        className='border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Button text="Sign Up" className="justify-center" transparent onClick={handleSubmit} />
                    <div className="flex items-center mb-2">
                        <div className="w-[28%] h-0.5 bg-gray-200 mx-4"></div>
                        <p className='text-gray-900'>or sign up with</p>
                        <div className="w-[28%] h-0.5 bg-gray-200 mx-4"></div>
                    </div>
                    <OAuth type='sign-up' />
                    <div className='flex gap-2 '>
                        <p>Already have an account?</p>
                        <span onClick={() => navigate("/sign-in")} className='hover:cursor-pointer text-indigo-500'>Sign in</span>

                    </div>
                </form>
            </div>
        </div>
    )
}