import React, { Component } from 'react';
//This imports the entire React library and makes it available via the React variable. It also imports the Component object directly so we can use it without having to specifically qualify it with a preceding React. object reference.

//in other words, if we didn't explicitly import the Component object then we'd have to access it as follows:

//React.Component

//But because we imported Component directly, we can just use it on its own without any reference to the React variable. It doesn't matter which one you use, and is just down to preference.

//Next, to actually create the component, we extend the Component object to create a new class that defines our <Header /> component. After the import statement, type:

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Header;

// this means class name; Header
// Props reffer to object properties.

// What is state in a React app? You can think of it as a single JavaScript object which represents all the data in your app.

//State can be defined on any component, but if you want to share state between components then it's better to define it on the top-level component(App.js). State can then be passed down to child components and accessed as required.

//The core idea behind using state is that whenever data in your app changes, React updates the relevant parts of the DOM for you. All you have to do is manage the data, or state, in your app, and React handles all the DOM updates.
