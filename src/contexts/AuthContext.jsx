import React, { useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = React.createContext();


export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()



    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user)
        })
        
        return unsubscribe;
        
    },[])
    
    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;