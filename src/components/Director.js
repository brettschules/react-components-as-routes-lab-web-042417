import React from 'react';


const Director = ({director}) => {
  return (
    <div>
      <h2>Name: {director.name}</h2>
      <h3>Movies:</h3>
      <div>
        {director.movies.map(movie => <li>{movie}</li>)}
      </div>
    </div>
  );
};

export default Director;
