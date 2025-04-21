import React from 'react'
import {useState, useEffect, useRef} from 'react';

const AddMovieForm = ({addMovie, title, setTitle, rate, setRate}) => {

  
  
  return (
    <>
    <form action="post" onSubmit={addMovie} id="add-movie-form">
    <div className="border-bottom">
      <h4>Lägg till en film</h4>
    </div>
    <div className='mb-2'>
        <label htmlFor="title-input" className="">Titel:</label>
        <input value={title} 
        onChange={e => setTitle(e.target.value)}
        className="w-100" type="text" id="title-input"/>
        <label htmlFor="title-input">Betyg:</label>
        <select value={rate} 
        onChange={e => setRate(e.target.value)}
        className='w-100' name="rating-field" id="rating-field">
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <button className="btn-sucess bg-success text-white rounded">Lägg till film</button>
    </form>
    </>
  )
}

export default AddMovieForm
