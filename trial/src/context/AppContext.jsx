import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendURL = "http://localhost:3000"
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

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

    useEffect(() => {
        getAuthState()
    }, [])

    const value = {
        backendURL,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData,
        getAuthState
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}