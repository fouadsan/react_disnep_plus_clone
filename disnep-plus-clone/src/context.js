import React, { useState, useEffect, useContext } from 'react'
import db from './firebase'
import { auth, provider } from './firebase'
import { signInWithPopup, signOut  } from "firebase/auth";

const initialState = {
  name: "",
  email: "",
  photo: "",
  isLogin: false
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(initialState);

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const user = result.user;
            setUser({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                isLogin: true
            })
            // ...
        }).catch((error) => {
            console.log("Something went wrong");
        });
    }

    const signout = () => {
        signOut(auth)
        .then(() => {
            setUser({
                name: "",
                email: "",
                photo: "",
                isLogin: false
            })
        }).catch((error) => {
            console.log("Something went wrong");
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    isLogin: true
                })
            }
        })
    }, [])

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
            setMovies(tempMovies); 
        })
    }, [])
    

    return <AppContext.Provider value={{
        movies,
        user,
        setUser,
        signIn,
        signout
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }