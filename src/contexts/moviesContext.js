import React, {useContext, useState} from "react";
import {AuthInfoContext, LoggedInContext} from "./authContext";
import {putUser} from "../api/userdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [authInfo,setAuthInfo] = useContext(AuthInfoContext)
    const isLoggedIn = useContext(LoggedInContext)
    const [favourites, setFavourites] = useState([])
    const [myReviews, setMyReviews] = useState( {} )


    const addToFavourites = (movie) => {
        let newFavourites = favourites;
        if (!favourites.includes(movie.id)) {
            newFavourites.push(movie.id);
            setFavourites(newFavourites);
            //setAuthInfo({...authInfo,favourites:{favourites}})
            //console.log(res.response.msg)
        }
        else{

        }

    };

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites( favourites.filter(
            (mId) => mId !== movie.id
        ) )
        //setAuthInfo({...authInfo,favourites:{favourites}})
        const res=putUser(authInfo);
        if(res.response.code ===401) {
            let newFavourites = favourites;
            newFavourites.push(movie.id);
            setFavourites(newFavourites);
            //setAuthInfo({...authInfo,favourites:{favourites}})
        }
    };

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;