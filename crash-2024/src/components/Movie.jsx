import React from 'react'
import {useEffect, useState} from 'react';
import Star from '../assets/images/star.png'
import Delete from '../assets/images/delete.png'

const Movie = ({movie, removeFilm}) => {

    const deleteMovie = () => {
        console.log(movie);
    }

  return (
    <>
    <li className='bg-light p-3 m-2 rounded border justify-content-between d-flex'>
        <span>
        {movie.title}
        </span>
        <span className="ms-auto float-right">
            {Array.apply(null, Array(parseInt(movie.rate))).map(item =>(
            <img width = "15px" src={Star} alt="" />
     ))}
     <img width="15px" src={Delete} alt="" type="button" onClick={() => removeFilm(movie)}/>
    </span></li>
    </>
  )
}

export default Movie
