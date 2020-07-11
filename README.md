This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

In this application you can visit the Testimonials or Calculator Sections selecting them from the navigation bar placed on the top, Home section stills under construction.

It was designed following a mobile first aproach because nowadays most users visit the websites using their smartphones.

This application was build following best code practices and it is fully tested using react-testing-library and Jest. (Check the code coverage running the following command: `yarn test -- --coverage`).

## Available Scripts

In the project directory, you can run:

### `yarn`

Install the required app node_modules

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technologies stack

- React
- React Hooks
- Redux
- Redux-Saga
- React-Bootstrap
- React-testing-library
- Jest
- Font Awesome
- ES6 features

## App structure

All the application code is contained inside _src_ folder.

Inside every componen folder you will find a _.jsx_ file where the component view and logic is defined, _styles.css_ for component styles and _.spec.js_ containing the unit testing cases for component functionalities.

* /src
    * /actions - _Redux actions definition_
    * /assets - _images, fonts, etc..._
    * /components - _React components_
    * /constants - _Application contants, you can find action types definitions here_
    * /containers - _Components connected to Redux Store_
    * /reducers - _Redux reducers_
    * /sagas - _Async actions handlers_
    * App.js - _Application entry point_

