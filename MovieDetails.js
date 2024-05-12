// src/components/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// src/App.js
import './App.css';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = '341d256ffa75f34d04880acb45429f98';
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className='descDiv'>
      <h1 className='movie_name'>{movie.title}</h1>
      <img className='image' src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h3 className='desc'>{movie.overview}</h3> 
      <h4 className='rate'> Rating:  {movie.vote_average} ⭐</h4>
    </div>
  );
};

export default MovieDetails;
