import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    // const backendURL = "https://aapkaghar.onrender.com"
    const backendURL = process.env.REACT_APP_URL
    // const supaURL = 'https://ifuxxfneemmedsgtconx.supabase.co'
    const supaURL = process.env.REACT_APP_SUPA_URL
    // const supaAPIKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmdXh4Zm5lZW1tZWRzZ3Rjb254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4ODQyMzIsImV4cCI6MjA1MjQ2MDIzMn0.pJB9kuutv8YrnTy0vOaeFfwauOXORw9NTL4yWistJKY'
    const supaAPIKey = process.env.REACT_APP_SUPA_API_KEY

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
        if (userData && userData._id) { // Ensure userData exists before calling
            getUserListings();
        }
    }, [userListings]);

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
        setLoading,
        supaAPIKey,
        supaURL
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}