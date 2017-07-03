import React from 'react';


const Actor = ({actor}) => {
  return (
    <div className="actor">
      <h2>{actor.name}</h2>
      <h3>Movies:</h3>
      <div>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </div>
    </div>
  );
};

export default Actor;
