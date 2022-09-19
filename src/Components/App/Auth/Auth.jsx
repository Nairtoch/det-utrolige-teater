import { useContext, createContext } from "react";
import { useState, useEffect } from "react"

// Initializing auth context.
const AuthContext = createContext();

// Defines context provider with props.children som state value.
const AuthProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('')

    // Updates loginData with data from sessionStorage, if it exists.
    useEffect(() => {
        if(sessionStorage.getItem('token')){
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [children])

    // Returns Provider.
    // All children of this gets access to logindata.
    return(
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook: "a hook you made yourself".
// Makes it easy to call on context.
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth }