import React, { useContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { AppContent } from "../.././context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const { backendURL } = useContext(AppContent)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isEmailSent, setisEmailSent] = useState("");
    const [otp, setotp] = useState(0);
    const [isOtpSubmitted, setisOtpSubmitted] = useState(false);

    const inputRefs = React.useRef([])

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

    const onSubmitEmail = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${backendURL}/api/auth/send-reset-otp`, { email })
            if (data.success) {
                toast.success(data.message)
                setisEmailSent(true)
            } else {
                toast.error(data.message)
            }
        } catch (e) {
            toast.error(e.message)
            toast.error("Please try again later")
        }
    }

    const onSubmitOtp = async (e) => {
        e.preventDefault()
        const otpArray = inputRefs.current.map(e => e.value)
        setotp(otpArray.join(''))
        setisOtpSubmitted(true)

    }
    const onSubmitNewPassword = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${backendURL}/api/auth/reset-password`, { email, otp, newPassword })
            if (data.success) {
                toast.success(data.message)
                navigate('/sign-in')
            } else {
                if (data.message == 'Invalid OTP') {
                    setisOtpSubmitted(false)
                    toast.error("\nPlease Enter the correct OTP")
                }
                else toast.error(data.message)
            }
        } catch (e) {
            toast.error(e.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {!isEmailSent &&
                <form onSubmit={onSubmitEmail} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Reset Password</h2>                <p className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                    </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Submit
                    </button>
                </form>}
            {!isOtpSubmitted && isEmailSent &&
                <form onSubmit={onSubmitOtp} className="p-8 roundedn rounded-lg shadow-lg w-96 text-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Reset Password OTP</h2>
                    <p className="text-gray-600 mb-8">Enter the OTP sent to your email address.</p>
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
                        Submit
                    </button>
                </form>
            }
            {/* enter new password */}
            {isOtpSubmitted && isEmailSent &&
                <form onSubmit={onSubmitNewPassword} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">New Password</h2>
                    <p className="text-gray-600 mb-8">Enter the New Password below.</p>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your New Password"
                        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>}
        </div>
    );
}