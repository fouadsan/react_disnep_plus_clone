import React, { useState, useEffect, useContext } from 'react'
import db from './firebase'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
            setMovies(tempMovies); 
        })
    }, [])

    return <AppContext.Provider value={{
        movies
    }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }