import React, { useEffect, useState } from 'react';
// import { Autchontex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../Firebase/fitebase.init';
import { Autchontex } from './AuthContext';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscrive = onAuthStateChanged(auth, currentUser => {
            setLoding(false)
            setUser(currentUser)
            console.log('useEffect',currentUser)
        })
        return () => {
            unsuscrive
        }
    }, [])


    const userInfo = {
        createUser,
        signInUser,
        // loding,
        user,
        signOutUser,

    }

    return (
        <Autchontex value={userInfo}>
            {children}
        </Autchontex>
    );
};

export default AuthProvider;