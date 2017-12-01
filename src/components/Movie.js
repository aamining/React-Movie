import React, { Component } from 'react';

class Movie extends Component {


  render() {
    return (
      <div className="movie">
        <h2>{ this.props.meta.title }</h2>
        <div><img width="200" src={ this.props.meta.poster } /></div>
        <p>({ this.props.meta.year })</p>
        <p>{ this.props.meta.description }</p>
      </div>
    );
  }
}

export default Movie;

// this means class name; movie
// Props reffer to object .

// What is state in a React app? You can think of it as a single JavaScript object which represents all the data in your app.

//State can be defined on any component, but if you want to share state between components then it's better to define it on the top-level component.(App.js) State can then be passed down to child components and accessed as required.

//The core idea behind using state is that whenever data in your app changes, React updates the relevant parts of the DOM for you. All you have to do is manage the data, or state, in your app, and React handles all the DOM updates.
