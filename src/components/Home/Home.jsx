import React from 'react';
import  { useEffect, useState } from "react";

import MoviesList from '../MovieList/MovieList';
import "./Home.css"

function Home() {
    const [movie, setMovie] = useState();
    async function getMovie() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
        const data = await response.json();

        setMovie(data);

    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="home">
            <h1>Home Page</h1>
            {
                movie && (<MoviesList movies={movie} />)
            }
        </div>
    )
}
export default Home;