import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          <Movie title="50 First Dates" year="2004" description="Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams." poster="./posters/50-first-dates.png" />
          <Movie title="Ferris Bueller's Day Off" year="1986" description="A high school wise guy is determined to have a day off from school, despite what the principal thinks of that." poster="./posters/ferris.png" />
          <Movie title="Matilda" year="1996" description="Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable." poster="./posters/matilda.png" />
          <Movie title="Dirty Dancing" year="1987" description="Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle." poster="./posters/dirty-dancing.png" />
        </div>
      </div>
    );
  }
}

export default App;

//We need state to be initialized along with the component class, which we can do via the constructor function.

//When using a constructor function in a React class, you need to call super() first as the Component object we're extending needs to be initialized before anything else. Plus, the this keyword will not be available inside the constructor until after super() has returned.
