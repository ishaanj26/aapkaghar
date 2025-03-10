import React, { useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from "../../firebase";
import { AppContent } from "../../context/AppContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Buttons/Button";
import { toast } from 'react-toastify';

import { FaGoogle } from "react-icons/fa";

export default function OAuth({type}) {
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
        <Button onClick={handleGoogleClick} text={type=='sign-in'? "Sign In with Google":"Sign Up with Google "} buttonType 
        className="justify-center items-center bg-blue-800 border-none hover:bg-blue-900"
        leftIcon={<FaGoogle  />}
        />

    )
}