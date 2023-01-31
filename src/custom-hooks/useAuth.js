import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const useAuth = () => {

    const [currentUser, setCurrnetUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setCurrnetUser(user);
            } else {
                setCurrnetUser(null);
            }
        });
    });

    return {
        currentUser,
    };
};

export default useAuth;