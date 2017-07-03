import React from 'react';


const Movie = ({movie}) => {
  return (
    <div>
      <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h3>Genres:</h3>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  );
};

export default Movie;
