import React from 'react'
import  './secondpage.css'
export const SubmitMovie = () => {
  return (
    <div className='submitmovie'>
        <h1 id='formtitle' > Submit a note </h1>
        <form   enctype="multipart/form-data"   className='movieform' action='https://moviebackend-lo5u.vercel.app/movies' method='POST'>
            <input type='text' name="title" placeholder='title' />
            
            <textarea type='text' name="genre" placeholder='cotent'/>
           
            <button>+</button>
            </form>
    </div>
  )
}
export default SubmitMovie
