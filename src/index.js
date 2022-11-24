import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpComingPage from "./pages/upComingPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                <Routes>
                    <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
                    <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
                    <Route path="/movies/:id" element={<MoviePage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={ <Navigate to="/" /> } />
                    <Route exact path="/movies/upcoming" element={<UpComingPage />} />
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );