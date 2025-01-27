import React from 'react'
import  './secondpage.css'
export const SubmitMovie = () => {
  return (
    <div className='submitmovie'>
        <h1 id='formtitle' > Submit a movie</h1>
        <form   enctype="multipart/form-data"   className='movieform' action='https://moviebackend-lo5u.vercel.app/movies' method='POST'>
            <input type='text' name="title" placeholder='title' />
            <input type='number' name="year" placeholder='year'/>
            <input type='text' name="genre" placeholder='genre'/>
            <input type='number' name="rating" placeholder='rating'/>
            <input type='file' name="image" placeholder='image'/>
            <button>Submit</button>
            </form>
    </div>
  )
}
export default SubmitMovie
