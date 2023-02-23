import  { useEffect, useState } from 'react';
import initializeFirebaseApp from '../pages/Login/Firebase/Firebase.init';
import {
    getAuth, createUserWithEmailAndPassword, updateProfile,
    GoogleAuthProvider, signInWithPopup, getIdToken, signOut, onAuthStateChanged, signInWithEmailAndPassword
} from 'firebase/auth'



initializeFirebaseApp()

const auth = getAuth()
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {

    const [token,setToken] =  useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, "POST")
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/')
            })
            .catch(err => {
                setError(err)
            }).finally(() =>
                setIsLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            }
            else {
                setUser({})
            }

            setIsLoading(false);
        })
        return () => unSubscribe
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            alert("logout successful")

        }).catch(e => {

        }).finally(() =>
            setIsLoading(false));
    }

    const handleLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setError('')
            }).catch(e => {
                setError(e)
            }).finally(() =>
                setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.name, "PUT")
            }).catch((error) => {
                setError(error)
            }).finally(() =>
                setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    return (
        {
            user, admin,token, registerUser, logout, handleLogin, isLoading, error, setError, signInWithGoogle
        }
    );
};

export default useFirebase;