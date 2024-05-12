
// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// src/App.js
import './App.css';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = '341d256ffa75f34d04880acb45429f98';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <nav className='header'>
        <ul className='headerLeft'>
          <li className='navitem'><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
          <li className='navitem'><Link to="/about" style={{textDecoration:"none"}}>About</Link></li>
        </ul>
      </nav>
      <h1>Showtime<span className='movies'>App</span></h1>
      <div className="movies-container">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐Rating: {movie.vote_average}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
