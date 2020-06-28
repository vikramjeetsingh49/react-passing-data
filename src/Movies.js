import React, { Component } from 'react';
import MovieInfo from './MovieInfo.js';

class Movies extends Component {
render() {
 
  const { users, movies, usersByMovie } = this.props;
console.log(usersByMovie);
    const movieCards = Object.keys(movies).map(id => (
      <MovieInfo
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

  return <ul>{movieCards}</ul>;
}
}

export default Movies