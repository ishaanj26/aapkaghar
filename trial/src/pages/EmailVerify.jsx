import React, { useContext, useEffect } from "react";
import axios from 'axios'
import { AppContent } from '../context/AppContext';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EmailVerify() {

    axios.defaults.withCredentials = true
    const inputRefs = React.useRef([])
    const { isLoggedIn, getUserData, userData } = useContext(AppContent)
    const navigate = useNavigate();

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1)
            inputRefs.current[index + 1].focus()
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0)
            inputRefs.current[index - 1].focus()
    }

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text')
        const pasteArray = paste.split('')
        pasteArray.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char
            }
        })
    }

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const otpArray = inputRefs.current.map((e) => e.value)
            const otp = otpArray.join('')
            const { data } = await axios.post('http://localhost:3000/api/auth/verify-account', { otp })
            if (data.success) {
                toast.success(data.message)
                getUserData()
                navigate('/')
            }
            else {
                toast.error(e.message)
            }

        } catch (e) {
            toast.error(e.message)
        }
    }

    useEffect(() => {
        isLoggedIn && userData && userData.isAccountVerified && navigate('/')
    }, [isLoggedIn, userData])
    return (
    !userData.isAccountVerified?
    <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Verify OTP</h2>
                <p className="text-gray-600 mb-8">Enter the OTP sent to your email address.</p>
                <form onSubmit={onSubmitHandler}>
                    <div onPaste={handlePaste} className="flex justify-between mb-8">
                        {
                            Array(6).fill(0).map((_, index) => (
                                <input
                                    type="text"
                                    maxLength="1"
                                    key={index}
                                    required
                                    className="w-12 h-12 text-3xl text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    ref={e => inputRefs.current[index] = e}
                                    onInput={(e) => handleInput(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                />

                            ))
                        }
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Verify
                    </button>
                </form>
                <p className="text-gray-600 mt-4">
                    Didn't receive the OTP?{" "}
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        Resend
                    </a>
                </p>
            </div>
        </div>:<>
        {
        navigate("/")
        }
        </>
    );
}