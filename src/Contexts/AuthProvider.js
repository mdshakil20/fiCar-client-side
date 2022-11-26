import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const setUserInfo=(updateInfo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updateInfo);
    }

    useEffect(() => {
        const unsuscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsuscriber();
    }, [])

    const authInfo = {
        createUser,
        login,
        user,
        logOut,
        setUserInfo,
        loading,
        loginWithGoogle,

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    )
};

export default AuthProvider;