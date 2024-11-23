import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword , GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // console.log(children);

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const manageProfile = (name,image) => {
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: image
        })
    }

    const handleLogout = () => {
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);

            if(currentUser) setUser(currentUser)
            else setUser(null);

            setLoading(false)
            return () => {
                unsubscribe();
            }
        })
    },[])

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        manageProfile,
        setUser,
        user,
        loading,
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    children
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;