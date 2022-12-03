import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import {useQuery} from "react-query";
import {getSimilarMovies} from "../../api/tmdb-api";
import {useEffect, useState} from "react";

const SimilarMovieList = ( {movie, action }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getSimilarMovies(movie.id).then((movies) => {
            setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let movieCards = movies.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Movie key={m.id} movie={m} action={action} />
        </Grid>
    ));
    return movieCards;
};

export default SimilarMovieList;