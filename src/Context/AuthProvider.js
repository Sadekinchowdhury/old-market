import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';




export const AuthContext = createContext()
const gprovider = new GoogleAuthProvider();


const auth = getAuth(app)

const Authprovide = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // signup
    const creatUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sigout

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google login
    const GoogleLogin = (Provider) => {
        return signInWithPopup(auth, Provider)
    }


    // signin

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile

    const updatePro = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // statechang


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observ')
            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubscribe();


    }, [])



    const authInfo = {
        updatePro,
        creatUsers,
        LogIn,
        user,
        LogOut,
        loading,
        GoogleLogin,



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovide;