import React from 'react'
import {useState, useEffect} from 'react';
import Movie from './Movie';

const Movies = ({movies, setMovies}) => {


     const removeFilm = (movie) => {
        const newFilms = movies.filter((m) => m.title != movie.title);
        localStorage.setItem('movies', JSON.stringify(newFilms));
        setMovies(newFilms);
     }

     const sortByTitle = () => {
        const sortedFilms = movies.toSorted((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedFilms);

     }

     const sortByRate = () => {
        const sortedFilms = movies.toSorted((a, b) => b.rate - a.rate);
        setMovies(sortedFilms);
     }

  return (
    <>
        <div>
            <ul className="list-unstyled">
                {!movies ? <p>Inget här än</p> : movies.map((movie, i) => (
                    <Movie movie = {movie} removeFilm = {removeFilm}/>
                ))}
            </ul> 
        </div>
        <div className="d-flex justify-content-right m-2">
          <button onClick={() => sortByTitle()} className="bg-info rounded border">Alfabetisk ordning</button>
          <button onClick={() => sortByRate()} className="bg-info rounded border">Betygsordning</button>
        </div>
    </>
  )
}

export default Movies
