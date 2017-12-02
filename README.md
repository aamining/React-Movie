This is really good and step by step react tutorial by: by David Gwyer 30 Aug 2017

```
https://code.tutsplus.com/tutorials/react-crash-course-for-beginners-part-1--cms-29291

```

Ali has follow these steps and made the app, some other more details and correction has been added to this tutorial based on Ali's experience on following this tutorial.

Ali's app and this tutorial does not have any pictures taken from source.

In this tutorial series we'll dive right into using React as we build a fully working app to display a gallery of movies.

Learning how to build an app from scratch is a great opportunity to practise using all the key features of React whilst levelling up your development skills. All the recommended methods and best practices are followed, which is essential for creating modern React apps.

We'll be setting up a brand new React app using the create-react-app tool, developed by Facebook, as well as covering the following React topics in detail:

Components

JSX

Props

State

Structuring your app correctly

Using ES6 features for modern app development

# What We'll Be Building

To make learning about React development more fun, we'll be building a fully working app, rather than presenting generic snippets of code when new aspects of React are covered.

Together we'll build 'Movie Mojo', an app to display a gallery of feel-good movies. When complete, the app will load some movies on page load, and will then load in more when a button is clicked. Finally, you'll be able to enter your own movie titles via a custom form that, when submitted, will dynamically insert a new movie into the gallery.

Finished Movie Mojo App

# Prerequisites

This is an intermediate level tutorial, and so you'll benefit greatly if you have some prior knowledge of the following topics:

ES6 features such as arrow functions, classes, and modules.

Know what React components, props, and state are.

Some experience using Node.js and NPM.

At least a basic level of JavaScript proficiency.

Most of these are covered in detail as we go along, but I'd recommend brushing up on any particular areas as necessary.

Let's Get Set Up
We'll be using the create-react-app tool to set up our React app. It's extremely easy to use and will allow us to focus on coding our app straight away, without having to navigate through a complicated setup process.

To use create-react-app, you'll need to have Node.js and npm installed. You can check if they're both available by typing the following in a command-line window:

```
node -v

```
And then:

```
npm -v
```
If they're both installed then you'll see the current version number for each.

```
MacBook-Pro:~ davidgwyer$ node -v
v6.11.1
MacBook-Pro:~ davidgwyer$ npm -v
5.3.0
MacBook-Pro:~ davidgwyer$

```

```

MacBook-Pro:~ davidgwyer$ node -v
v6.11.1
MacBook-Pro:~ davidgwyer$ npm -v
5.3.0
MacBook-Pro:~ davidgwyer$

```

If you need to install or update Node.js and npm then the simplest way is to download Node.js from the official web page. Node.js is bundled with npm so you don't need to perform a separate installation.

To install create-react-app globally, type this into any command-line window:

```
npm install -g create-react-app

```

We can now go ahead and use create-react-app to scaffold out our new React app. It will also create a top-level folder to contain our project files. Open a command-line window and navigate to the folder you want your app located (e.g. /Desktop), and type in the following:

```
create-react-app movie-mojo

```

It will take a minute or so to complete, but when it does, you should see a message.

Project file structure:

The src folder is where you'll edit your project files, and when you come to deploy your app they'll be bundled and added to the public folder, ready for distribution.

To view the sample app in your browser, let's take advantage of the mini web server included with create-react-app. We need to be inside the project folder we just created, so in the command-line window, type:

```

cd movie-mojo

```
And then:

```

npm start

yarn start

```

This simple command does three main things. It will:

Compile our sample React app.

Open a new browser window and display our app.

Monitor changes to project files.

You can now view movie-mojo in the browser.

  Local: http://localhost:3000/

  On Your Network: http://192.168.0.15:3000/

Note that the development build is not optimized.

To create a production build, use yarn build.

And here's the sample app running in the browser.

Sample app

When any changes are made to your app, it will automatically be recompiled and reloaded in the browser window. This is a really cool feature of create-react-app and will save you a lot of time during development!

It also allows you to focus on coding your app without being distracted by having to manually recompile and continuously refresh the browser window to see the latest changes.

Perhaps the best workflow, if you have the available screen space, is to have the browser and text editor open side by side. That way, whenever you make a change to one of your project files, you'll see the changes almost instantly displayed in the browser window.

Let's try out making a change to our sample project.

Inside the src folder, open App.js in your text editor. Try changing the line:

To get started, edit <code>src/App.js</code> and save to reload.

to:

Welcome to the 'Movie Mojo' React app!

As soon as you save the changes, the React app automatically recompiles, and the browser window refreshes.

Structuring Our App

Let's set up the structure of our app that we'll use for the remainder of this tutorial.

The create-react-app tool does a great job of scaffolding our app, but we still have the flexibility to tweak it to suit our needs.

Firstly, let's get rid of the files we no longer need from our src folder. We don't need service workers in our app, so delete the registerServiceWorker.js file. This is referenced in index.js, so open it up in an editor and delete all references so it looks like this:

```

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

```

ReactDOM.render(<App />, document.getElementById('root'));
Next, delete the logo.svg file and edit App.js to remove references to it. Your updated file should now look like this:

```
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}

export default App;

```


We can also get rid of the App.test.js file. This will leave us with the following files in src:

```

index.js
index.css
App.js
App.css

```

We'll be creating multiple components, so let's create a dedicated folder to store them all in. Inside src, create a new components folder and add the App.js file to it. Our app won't compile properly until we update a couple of references.

In index.js, update the path to import the <App /> component:

```

import App from './components/App';

```

And in App.js, update the path to App.css:

```

import '../App.css';

```

Save your changes and make sure your app recompiles successfully.

We're now almost ready to begin coding our 'Movie Mojo' app. First, though, let's get familiar with how our app is rendered.

Take a look at index.js. This is the file that actually renders our app to the DOM. It does this via the ReactDom.render() method, which takes in two arguments. The first argument is the component we want to render. In our case, this is the <App /> component, which is the top-level (and currently only) component in our app.

The second argument specifies the DOM target element we want to mount our React app to. By default, 'create-react-app' creates this element automatically. If you take a look inside the public folder, there's an index.html which contains a <div> element with an id of root.

You can change this to be anything you prefer, but it's fine to leave it at the default for this tutorial.

index.js loads in our <App /> component from App.js, and we'll be following along with this design pattern by separating out each component contained in our app into its own file.

App.js will be our top-level component which will contain other components, which in turn could contain references to other components. Think of components as being similar to HTML tags where you have the top-level <body> element which may contain one or more <div> elements, which could turn contain a <nav> menu element, and so on.

part II

In part one of this tutorial series, we used the create-react-app tool to create a working sample app as a starting point for our 'Movie Mojo' gallery app.

In part two, we'll get to grips with adding our first custom component to display individual movie cards. We'll also see how using props allows us to customize the appearance of components by passing in data rather than hard coding it.

This demonstrates the flexibility and reusability of components, and how they can be used as powerful building blocks in your React apps.

#Our First Component

OK, let's create a component! To start with, we'll keep things fairly simple and refactor the header HTML into its own component.

Modern React best practices recommend separating out each component in your app into a separate file. We'll be following this principle so, in your projects /src/components/ folder, create a new file called Header.js and open it in a text editor.

At the top of component files we always start by importing required libraries, other components (as we can nest components), and extra assets we need (e.g. styles). The import statement is part of ES6 and allows us to keep our projects highly modular.

For our <Header /> component, we only need to import the React library, which we can do with this statement:

```
import React, { Component } from 'react';

```
This imports the entire React library and makes it available via the React variable. It also imports the Component object directly so we can use it without having to specifically qualify it with a preceding React. object reference.

In other words, if we didn't explicitly import the Component object then we'd have to access it as follows:

```
React.Component

```

But because we imported Component directly, we can just use it on its own without any reference to the React variable. It doesn't matter which one you use, and is just down to preference.

Next, to actually create the component, we extend the Component object to create a new class that defines our <Header /> component. After the import statement, type:

```
class Header extends Component {

}

export default App;

```
Here, we use an ES6 class as our component container. Classes are a great way to encapsulate all the code needed to describe your component.

You might have also noticed that the component file ends with an export statement. This, as you might expect, exports our component and makes it available to other files in our project.

At the very minimum, all React components are required to have a render method, which returns some markup. This could be HTML, other React components, or a mixture of both.

Add this inside your component class:

```
render() {
    return React.createElement( 'div', null, 'Hello there, this is a React component!' );
}

```

The React.createElement() method creates an HTML element (a <div> in this case) and adds some content to it. Save changes to Header.js and open up App.js.

To use a React component inside another component, we first need to import it, so add this to the list of import statements at the top of App.js:

```
import Header from './Header';

```

Note how you don't need to add the .js file extension as this is assumed. Also, because the <Header /> component is in the same folder as our <App /> component, we don't need to specify the full path.

In fact, if you try to use import Header from './components/Header'; from inside App.js, you'll get a compilation error.

We can now add the <Header /> component inside the return statement just like any HTML element. However, there is a caveat. You can only return one top-level element inside a components return method.

So this is not allowed:

```
render() {
  return (
    <div className="apples"></div>
    <div className="oranges"></div>
  );
}

```

If you want to return multiple elements then you have to wrap them all up inside a single wrapper element:

```
render() {
  return (
    <div className="fruit">
      <div className="apples"></div>
      <div className="oranges"></div>
    </div>
  );
}

```

So make sure that you add the <Header /> component inside the <div className="App"> element to avoid errors.

```
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <h2>Discover Your Movie Mojo!</h2>
        </div>
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}

```
This will result in our <Header /> component being rendered.

To complete the <Header /> component, we'll remove the following block of HTML from App.js and add it to Header.js.

```
<div className="App-header">
  <h2>Discover Your Movie Mojo!</h2>
</div>

```
However, you might have noticed there is an issue. In App.js the <App /> component render method returns what looks like HTML. Yet in Header.js there's just a single call to React.createElement(). What's going on?

The answer is JSX. In App.js we use JSX to write HTML-like syntax to define our component output. Compare this with our component definition for Header.js.

```
React.createElement( 'div', null, 'Hello there, this is a React component!' );

```

This is how we have to write React components without JSX. In fact, under the hood, this is what JSX is compiled into before it can be rendered to the browser.

You're not required to use JSX at all for your React components; it is entirely up to you. But almost all components you'll come across will be written in JSX because it's just so much easier to write.

It's also highly readable for others new to your code. Imagine having to study a React project containing dozens of different components written in plain JavaScript!

So it should come as no surprise that we'll be using JSX for component definitions throughout the remainder of this tutorial series.

Go ahead and replace the React.createElement() call with the JSX equivalent we copied from App.js. Your Header.js file should now look like this:

```
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>Discover Your Movie Mojo!</h2>
      </div>
    );
  }
}

export default Header;

```

While JSX allows us much more flexibility in writing our components, bear in mind that it isn't actual HTML we're writing but an abstraction of it.

You can see this in the code snippet above. Notice in the <div> tag we used className rather than class to indicate where we want to declare a CSS class? This is because all JSX is compiled down to pure JavaScript, and class is a reserved word in ES6 JavaScript.

Let's also tweak the header styles. Open App.css and edit the .App-header CSS class to be:

```
.App-header {
  background-color: steelblue;
  height: 70px;
  padding: 20px;
  color: white;
}

```

This updates the background color of the header and reduces the height.

# Component Props

o far, our <Header /> component is static. That is, it displays fixed content that never changes. But components can be made to be dynamic and display content passed into them, via component props. This makes components suddenly much more useful as they become generic and reusable.

Think of component props as similar to HTML tags. For example, a <div> tag may have attributes for id, class, style and so on that enable us to assign unique values for that specific <div> element.

We can do the same for React components. Say we didn't want our header to output the fixed text 'Discover Your Movie Mojo!' all the time. Wouldn't it be better if our header could display any text?

Unlike HTML attributes, we can name our component props whatever we like. Inside App.js, update the <Header /> tag to be:

```
<Header text="David's Movie Mojo App!" />

```

Then, update the <Header /> component to use the text prop.

```
<div className="App-header">
  <h2>{this.props.text}</h2>
</div>

```

This results in our header displaying whatever text is added to the text prop in App.js.

Let's take a closer look at how we referenced the text prop inside Header.js using:

```
{this.props.text}

```
The curly braces simply tell JSX that we have some JavaScript we want to evaluate. This distinguishes it from text. If we didn't use any curly braces, the string literal this.props.text would be outputted, which isn't what we want.

The this keyword refers to the Header component class, and props is an object that contains all the values passed in from <Header text="David's Movie Mojo App!" />. In our case, the props object contains just the one entry, but you can add as many as you like in practice.

Our <Header /> component is now much more generic and doesn't contain a hard-coded string. This is a good practice when writing React components. The more generic you make them, the more reusable they are.

This is good news when developing future React apps as you can reuse components from previous projects so you don't have to write everything from scratch.

We used props above to pass a fixed string into the <Header /> component, but props can also pass variables, function references, and state to components.

To send a variable via props, we could do something like this, where headerText is a variable:

```
<Header text={headerText} />

```
part III

# Adding a Movie Component

So far in this React series, we've created a working sample app as a starting point for our 'Movie Mojo' gallery app, and we've seen how using props allows us to customize the appearance of components by passing in data rather than hard coding it.

In part three we'll create our first custom component, and then add state to our app. This will allow us to easily manage the app data without being concerned about manually updating the DOM. Instead we'll see how to let React handle all of the DOM rendering from now on.

A set of four movies will be displayed in our gallery on page load, and a further four will be loaded and displayed when the Load more... button is clicked.

Let's first tackle adding the <Movie /> component that will display information about an individual movie.

The <Movie /> component will display information about an individual movie. Multiple <Movie /> components will be displayed together to form a movie gallery of some feel-good movies. Hence the name of our React app, 'Movie Mojo"!

Before we add the <Movie /> component, let's update the CSS in App.js to style individual movies in the gallery. Open up App.css and replace the styles with:

```
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: steelblue;
  height: 70px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
}

/* new css for movie component */
* {
  box-sizing: border-box;
}

.movies {
  display: flex;
  flex-wrap: wrap;
}

.App-header h2 {
  margin: 0;
}

.add-movies {
  text-align: center;
}

.add-movies button {
  font-size: 16px;
  padding: 8px;
  margin: 0 10px 30px 10px;
}

.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
}


```

This styles the gallery to display movies in a grid formation and improve spacing around other visual elements.

Also, in /public/posters/, I've added 12 movie posters for convenience that you can use in your own project, if you're following along. You can download them as part of the finished project for part 4. Simply copy across the posters folder to your own React app public folder.

You can also download your own movie posters from the original website. For this tutorial, I used cinematerial.com for all the movie posters. There is a small fee to download the posters, but there are probably many other sources for posters if you want to try elsewhere.

OK, back to our <Movie /> component. Inside the /src/components/ folder, create a new Movie.js file, open it in an editor, and add the following:

```
import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h2>{ this.props.title }</h2>
      <div><img width="200" src={ this.props.poster } /></div>
        <p>({ this.props.year })</p>
        <p>{ this.props.description }</p>
      </div>
    );
  }
}

export default Movie;

```

This is pretty similar to the <Header /> component except we're referencing several props rather than just the one. Let's use our <Movie /> component to display some movies.

In App.js add four <Movie /> components inside a <div> wrapper so we can easily apply styles to just the movie elements. Here is the full App.js code:

```
import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

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

```
Note how we explicitly import the <Movie /> component, just like we did for <Header />, to make it available in the code. Each movie component implements props for title, year, description, and poster.

The result is four <Movie /> components added to our gallery.

It's very tedious to add movies manually one at a time in App.js. In practice, app data would likely come from a database and be temporarily stored in a JSON object before being added to the state object in your app.

# Managing React State

What is state in a React app? You can think of it as a single JavaScript object which represents all the data in your app. State can be defined on any component, but if you want to share state between components then it's better to define it on the top-level component. State can then be passed down to child components and accessed as required.

Even though state is one main object, that object can contain multiple sub-objects related to different parts of your app. For example, in a shopping cart app, you might have a state object for the items in your order, and another object for monitoring inventory.

In our 'Movie Mojo' app, we have just a single sub-state object to store the movies in our gallery.

The core idea behind using state is that whenever data in your app changes, React updates the relevant parts of the DOM for you. All you have to do is manage the data, or state, in your app, and React handles all the DOM updates.

# Adding Movies via State

For the sake of simplicity, we'll forgo the database step and pretend our movie data has been retrieved from a database and stored in JSON format.

To demonstrate adding items to an initial state, as well as updating state when an event occurs (such as a button press), we'll use two JSON objects, each containing data about four movies.

In the src folder, add a new movies.js file, open it in an editor, and add the following code to define our two JSON objects:

```
// some sample movies
const initialMovies = {
  movie1: {
    title: "Ferris Bueller's Day Off",
    year: "1986",
    description: "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
    poster: "./posters/ferris.png"
  },
  movie2: {
    title: "Bridget Jones' Diary",
    year: "2001",
    description: "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
    poster: "./posters/bridget-jones.png"
  },
  movie3: {
    title: "50 First Dates",
    year: "2004",
    description: "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams.",
    poster: "./posters/50-first-dates.png"
  },
  movie4: {
    title: "Matilda",
    year: "1996",
    description: "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
    poster: "./posters/matilda.png"
  }
};

const additionalMovies = {
  movie5: {
    title: "Dirty Dancing",
    year: "1987",
    description: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle.",
    poster: "./posters/dirty-dancing.png"
  },
  movie6: {
    title: "When Harry Met Sally",
    year: "1989",
    description: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
    poster: "./posters/when-harry-met-sally.png"
  },
  movie7: {
    title: "Elf",
    year: "2003",
    description: "After inadvertently wreaking havoc on the elf community due to his ungainly size, a man raised as an elf at the North Pole is sent to the U.S. in search of his true identity.",
    poster: "./posters/elf.png"
  },
  movie8: {
    title: "Grease",
    year: "1978",
    description: "Good girl Sandy and greaser Danny fell in love over the summer. When they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance?",
    poster: "./posters/grease.png"
  }
};

export {initialMovies};
export {additionalMovies};

```

Before we can reference the JSON objects in our <App /> component, we need to import them. Add this to the top of App.js:

```
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

```

Each JSON object is now available via the variables initialMovies and additionalMovies. So far, though, we don't have any state associated with our app. Let's fix that now.

The top-level component in our 'Movie Mojo' app is <App />, so let's add our state object here. We need state to be initialized along with the component class, which we can do via the constructor function.

When using a constructor function in a React class, you need to call super() first as the Component object we're extending needs to be initialized before anything else. Plus, the this keyword will not be available inside the constructor until after super() has returned.

To initialize our state object, add this inside the <App /> component class:

```
constructor() {
  super();

  this.state = {
    movies: {}
  };
}


```

This will create an empty state object for our React app. Using the React developer tools, we can see the state object initialized directly on the <App /> component.

However, we want to initialize the state object with some movies so they display straight away on page load. To do this, we can initialize the movies state object with initialMovies instead of an empty object.

```
constructor() {
  super();

  this.state = {
    movies: initialMovies
  };
}

```

This will set the initial state for our app to the four movies stored in the initialMovies JSON object, but the movies in the gallery are still being displayed via the hard-coded <Movie /> components we added earlier.

We need to output the movies in the movie state object instead, which we can do by using a loop to iterate over each movie.

Start by removing the hard-coded <Movie /> components, and replace them with:

```
{
  Object
    .keys(this.state.movies)
    .map(key => <Movie key={key} meta={this.state.movies[key]} />)
}

```
This code requires some explanation. The movie state object contains individual movies stored as objects, but to iterate over them it would be easier to work with an array instead.

So we use Object.keys() to grab all the keys for the movie objects and store them in an array. This is then iterated over using .map(), and a <Movie /> component is outputted for each movie in the movies state object.

There are a couple of changes from the previous way we added a <Movie />, though. Firstly, we pass in all the information for an individual movie via a single meta prop. This is actually more convenient than before, where we specified a separate prop for each movie attribute.

Also, notice that we specify a key prop too. This is used internally by React to keep track of components that have been added by the loop. It's not actually available to be used by the component, so you shouldn't try to access it in your own code.

Without a key prop, React throws an error, so it's important to include it. React needs to know which new movies have been added, updated, or removed so it can keep everything synchronized.

We need to do one more thing before our components can be displayed. Open up Movie.js, and for each reference to a prop, prefix it with meta, as follows:

```
<div className="movie">
  <h2>{ this.props.meta.title }</h2>
  <div><img width="200" src={ this.props.meta.poster } /></div>
  <p>({ this.props.meta.year })</p>
  <p>{ this.props.meta.description }</p>
</div>

```

# Loading More Movies

We've seen how to display movies that have been added to state as our app initializes, but what if we wanted to update our movie gallery at some point?

This is where React really shines. All we have to do is update the movies in the movie state object, and React will automatically update all parts of our app that use this object. So, if we add some movies, React will trigger the <App /> component's render() method to update our movie gallery.

Let's see how we can implement this.

Start by adding an HTML button inside the closing div wrapper in App.js.

```
div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>

```
When the button is clicked, a class method loadAdditionalMovies is called. Add this method to the <App /> component class:

```
loadAdditionalMovies() {
  var currentMovies = { ...this.state.movies };
  var newMovies = Object.assign( currentMovies, additionalMovies );

  this.setState({ movies: newMovies });
}

```
Updating state is relatively simple as long as you follow the recommended method, which is to copy the current state object to a new object, and update that copy with new items. Then, to set the new state, we call this.setState and pass in our new state object to overwrite the previous one. As soon as the state is updated, React updates only the parts of the DOM that have been affected by the change to state.

The first line in loadAdditionalMovies() uses a spread operator to copy all properties of the this.state.movies object into the new currentMovies object.

After that, we use Object.assign to merge two objects together, resulting in the list of new movies being added to the current list.

There is just one more step we need to complete before the loadAdditionalMovies() method will work. To reference any custom component method, we first need to manually bind it to the component class.

This is a quirk of React and is just something you'll have to remember to do. Any time a method is accessed without having been manually bound, React will complain and throw a compilation error.

Add this to the class constructor in App.js:

```
this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);

```
As long as you remember to use this workaround for every custom method that requires the use of this, you won't run into any problems.

Now, try clicking the Load more... Button. You should see four more movies added to the gallery.

This demonstrates a key strength of React. That is, letting you focus on the data in your app and leave all the mundane updating of the DOM to React. To add movies, all we had to do was to update the data in our movie state object, and React took care of everything else.

Our example app is still pretty basic, but imagine a much more complex app with many components and multiple state objects. Trying to manually update the DOM as the data in your app changes would be a huge (and error-prone) task!

PART IV

# Create the AddMovie Component

The <AddMovie /> component outputs a form to allow users to manually enter details about an individual film and add it to the existing movies in the gallery once the form has been submitted.

The form requires three text inputs for title, year, and poster image; plus a text area for the movie description. In /src/components/, create a new file called AddMovie.js and add the following:


```
import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <form className="movie-form">
        <p>Add a Movie</p>
        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
        <textarea ref={ ( input ) => this.description = input} placeholder="Description">
        </textarea>
        <button type="submit">Add Movie</button>
      </form>
    );
  }
}

export default AddMovie;

```

The React ref attribute stores a reference to each form input field as a component class property. We'll use these references shortly as a way to easily grab input field values.

Firstly, though, add the following styles to App.css to make the form a little more aesthetic:

```
/* movie form styles */

.movie-form {
  width: 250px;
  margin: 0 auto;
}

.movie-form input, .movie-form textarea {
  width: 250px;
  font-size:14px;
  padding: 5px;
  margin: 5px;
}

.movie-form button {
  font-size: 16px;
  padding: 4px;
  margin: 10px 10px 30px 10px;
}

```

In App.js, add the <AddMovie /> component inside the closing <div> wrapper element:

```
<AddMovie />

```

hen, at the top of the file, import the <AddMovie /> component to make it available.

```
import AddMovie from './AddMovie';

```

Your 'Movie Mojo' app should now display a form towards the bottom of the browser window.

We need to specify a callback method that executes whenever the form is submitted, which we can use to create a new movie. Add this to the <form> element:

```
onSubmit={(e) => this.addNewMovie(e)}

```

Then, add the addNewMovie() method to the top of the <AddMovie /> component class:

```
addNewMovie(e) {
  e.preventDefault();
  var movie =  {
    title: this.title.value,
    year: this.year.value,
    description: this.description.value,
    poster: this.poster.value
  };
  console.log(movie);
}

```

The first task is to prevent the default submission event from firing, which we do with e.preventDefault(). Otherwise, when the form is submitted, the web page will automatically refresh, which is not what we want.

Then, we create a new movie object by grabbing the form input field values we conveniently stored as component class properties earlier.

A console.log() command outputs the movie object so we can test it's being created correctly upon form submission.

Once you're satisfied the movie object is being correctly generated, go ahead and delete the console.log() call.

In order to display the new movie in our gallery, we need to add it to the movie state object. Once this is done, React will take care of updating the DOM for us.

To accomplish this, create a new method in App.js (where the app state object lives) to handle adding a movie to the current state.

```
addMovieToGallery( movie ) {
  console.log( 'mooooooovie', movie );
}

```

Don't forget to bind the new method to the this so it's available throughout the class.

```
<AddMovie addMovie={this.addMovieToGallery} />

```

Back in AddMovie.js, update the addNewMovie() method to pass the movie object to the addMovieToGallery() method via the addMovie prop we just created.

```
addNewMovie(e) {
  e.preventDefault();
  var movie =  {
    title: this.title.value,
    year: this.year.value,
    description: this.description.value,
    poster: this.poster.value
  };
  this.props.addMovie( movie );
}

```

Now, when we fill out the form, we get the movie object outputted to the console, as before, but this time it's via the addMovieToGallery() method in the <App /> component.

Delete the console.log() command in addMovieToGallery() and replace it with the following code to add the entered movie details to the movies state object:

```
addMovieToGallery( movie ) {
  var ts = Date.now();
  var newMovie = {};
  newMovie[ 'movie' + ts ] = movie;
  var currentMovies = { ...this.state.movies };
  var newMovies = Object.assign( currentMovies, newMovie );
  this.setState({ movies: newMovies });
}

```

This is pretty similar to what we did in part three for the loadAdditionalMovies() method. The main difference is that a unique key needs to be generated, on the fly, for each additional movie entry. This is achieved by using the current time stamp as the unique key and appending it to movie.

This will result in each additional movie, added via the form, having unique keys.

```
movie1501686019706
movie1501686027906
movie1501686032929

```

... and so on.

Open up the 'Movie Mojo' app in the browser and add two new movies to the gallery via the form. There are extra movie poster images added to the ./public/posters/ folder for convenience, so you can easily test adding movies to the gallery. You can access these by downloading the finished app project.

Each time you submit the form, an additional movie is added to the gallery!
