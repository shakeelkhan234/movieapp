import React from 'react'
import  './secondpage.css'
export const SubmitMovie = () => {
  return (
    <div className='submitmovie'>
        <h1 id='formtitle' > Submit a note </h1>
        <form className='movieform' action='https://moviebackend-lo5u.vercel.app/movies' method='POST'>
    <input type='text' name="title" placeholder='Title' required />
    <textarea name="genre" placeholder='Genre' required />
    <button type="submit">+</button>
</form>

    </div>
  )
}
export default SubmitMovie
