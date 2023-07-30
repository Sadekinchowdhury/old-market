import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext()
const gprovider = new GoogleAuthProvider();


const auth = getAuth(app)

const Authprovide = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, []);

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
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile

    const updatePro = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // statechang


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubscribe();


    }, [])

    // details

    // notification
    const [notiNumber, setNotiNumber] = useState(0)

    const notiFications = () => {
        setNotiNumber(notiFications + 1)
    }





    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])

    const authInfo = {
        updatePro,
        creatUsers,
        LogIn,
        user,
        LogOut,
        loading,
        GoogleLogin,
        notiNumber,
        setNotiNumber,
        users




    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovide;