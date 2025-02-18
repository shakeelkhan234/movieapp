import logo from './logo.svg';
//import './App.css';
import { useState, useEffect } from 'react';
import Header from './firstpage/Header.js';
import Main from './firstpage/Main.js';
import Card from './secondpage/Card.js';

import SubmitMovie from './secondpage/SubmitMovie.js';
function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    fetch('https://moviebackend-lo5u.vercel.app/getmovies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);  // 
  return (
   <>
    <SubmitMovie />
     

      <div className='secondpage'>
      {movies.map((movie,index) => (
        <Card key={index} imageUrl={movie.image} title={movie.title} />
      ))}

       
      

      </div>
    </>
  );
}

export default App;
