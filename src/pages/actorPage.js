import React from "react";
import {getActors} from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import ActorList from "../components/actorList";

const HomePage = () => {
    const {  data, error, isLoading, isError }  = useQuery('discover',getActors)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const actors = data.results;

    return (
        <Grid container sx={{ padding: '20px' }}>
            <Grid item xs={12}>
                <Header title={"Actor"} />
            </Grid>
            <Grid item container spacing={5}>
                <ActorList actors={actors}></ActorList>
            </Grid>
        </Grid>
    );
};
export default HomePage;