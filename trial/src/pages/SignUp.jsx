import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContent } from "../context/AppContext";
import {toast} from 'react-toastify'

export default function SignUp() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setIsLoggedIn,getUserData } = useContext(AppContent)

    const handleSubmit = async (e) => {
        e.preventDefault();//to prevent refereshing
        try {
            axios.defaults.withCredentials = true

            const { data } = await axios.post('http://localhost:3000/api/auth/register', { name, email, password })
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

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Create your Account</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    value={name}
                    type='text'
                    placeholder='username'
                    className='border p-3 rounded-lg'
                    onChange={e => setName(e.target.value)}
                />
                <input
                    value={email}
                    type='email'
                    placeholder='email'
                    className='border p-3 rounded-lg'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    type='password'
                    placeholder='password'
                    className='border p-3 rounded-lg'
                    onChange={e => setPassword(e.target.value)}
                />

                <button

                    className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                >
                    Sign Up
                </button>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Have an account?</p>
                <span onClick={() => navigate('/sign-in')} className='text-blue-700 hover:cursor-pointer'>Sign in</span>

            </div>
        </div>
    )
}