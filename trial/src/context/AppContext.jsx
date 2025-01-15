import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendURL = "http://localhost:3000"
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)
    const [loading, setLoading] = useState(false)

    const [userListings, setUserListings] = useState(false)

    axios.defaults.withCredentials = true;

    const getAuthState = async () => {
        try {
            const { data } = await axios.get(`${backendURL}/api/auth/is-auth`)
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            }

        } catch (e) {
            console.log(e.message)
        }
    }

    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendURL}/api/user/data`)
            if (data.success) {
                setUserData(data.userData)
            }
            else console.log(data.message)
        } catch (e) {
            console.log(e)
        }
    }

    const getUserListings = async () => {
        try {
            const { data } = await axios.get(`${backendURL}/api/user/listings/${userData._id}`)
            if (data.success) {
                setUserListings(data.listings)
            }
            else console.log(data.message)
        } catch (e) {
            console.log(e)
        }
    }



    useEffect(() => {
        getAuthState()
    }, [])

    useEffect(() => {
        if (userData) {
            getUserListings()
        }
    }, [userData]);

    const value = {
        backendURL,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData,
        getAuthState,
        userListings,
        setUserListings,
        loading, 
        setLoading
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}