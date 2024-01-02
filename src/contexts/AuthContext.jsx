import React, { useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { auth } from '../firebase.config';

const AuthContext = React.createContext();


export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()


    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => signOut(auth)

    const updateUserPassword = (password)=> {
        return updatePassword(currentUser, password)
    }
    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user)
        })
        
        return unsubscribe;
        
    },[])
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
        updateUserPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;