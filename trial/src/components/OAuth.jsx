import React, { useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OAuth() {
    const { setIsLoggedIn, getUserData, userData, backendURL } = useContext(AppContent)
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/google`, { name: result.user.displayName, email: result.user.email, photo: result.user.photoURL })
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
                navigate('/')
            }
            else {
                toast.error(data.message)
            }
            console.log(result)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <button onClick={handleGoogleClick} type='button' className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">OAuth</button>

    )
}