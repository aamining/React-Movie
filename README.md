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
