import React from 'react'
import {useState, useEffect} from 'react';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';

const MovieApplication = () => {

  const [movies, setMovies] = useState(() =>{
          const moviesFromStorage = JSON.parse(localStorage.getItem('movies'));
          return moviesFromStorage;
      });

      const [title, setTitle] = useState('');
      const [rate, setRate] = useState('');

      function addMovie(e){
        e.preventDefault();
        
        if(title == '' || rate == 0){
          alert('Du måste välja en titel och sätta ett betyg!');
          return;
        }
        const newMovies = movies;
        const movie = {title: title, rate : rate};
        newMovies.push(movie);
        localStorage.setItem('movies',JSON.stringify(newMovies));
        const finalMovies = JSON.parse(localStorage.getItem('movies'));
        setMovies(finalMovies);

        setTitle('');
        setRate(0);

    }
  
  return (
    <>
    <div className="">
        <h1>Min filmlista</h1>
        <AddMovieForm addMovie = {addMovie} title = {title} setTitle={setTitle} rate = {rate} setRate={setRate}/>
        <Movies movies = {movies} setMovies = {setMovies}/>
    </div>
    </>
  )
}

export default MovieApplication
