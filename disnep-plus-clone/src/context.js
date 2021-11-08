import React, { useState, useEffect, useContext } from 'react'
import db from './firebase'

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
        setUser
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }