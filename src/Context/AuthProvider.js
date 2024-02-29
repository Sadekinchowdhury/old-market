import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";

export const AuthContext = createContext();
const gprovider = new GoogleAuthProvider();

const auth = getAuth(app);

const Authprovide = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup
  const creatUsers = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sigout

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google login
  const GoogleLogin = (Provider) => {
    return signInWithPopup(auth, Provider);
  };

  // signin
  const LogIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile

  const updatePro = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // statechang

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // notification
  const [notiNumber, setNotiNumber] = useState(0);

  const notiFications = () => {
    setNotiNumber(notiFications + 1);
  };

  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://old-server.vercel.app/user?email=${user?.email}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        // console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [user?.email]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

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
    users,
    searchQuery,
    setSearchQuery,
    handleSearchChange,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovide;
