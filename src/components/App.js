import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

import AddMovie from './AddMovie';


class App extends Component {

  constructor() {


    super();

    this.state = {
      movies: initialMovies
    };
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
  }

  render() {
    return (

      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {
            Object
            .keys(this.state.movies)
            .map(key => <Movie key={key} meta={this.state.movies[key]} />)


          }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>

        <AddMovie addMovie={this.addMovieToGallery} />      </div>

    );
  }
  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
    this.setState({ movies: newMovies });
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
  }
}

export default App;

//We need state to be initialized along with the component class, which we can do via the constructor function.

//When using a constructor function in a React class, you need to call super() first as the Component object we're extending needs to be initialized before anything else. Plus, the this keyword will not be available inside the constructor until after super() has returned.
