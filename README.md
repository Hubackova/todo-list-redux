# Todo App

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
It is expected that the backend server is running on the port 8080 ([http://localhost:8080](http://localhost:8080)). It is possible to configure the proxy in package.json file.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm run eject`

*****

## Tech-stack

- used 3rd party libraries/packages (React + Redux was in the task assignment :))

### redux-saga

- for handle side effects
- i have no experience with another middleware, so saga was a clear choice

### reselect

- i did not use selectors before (i worked with Redux just for a 2 months), but i know that people in Moro like them, so i try it and it is perfect!

### axios

- as a http client

### node-sass

- for compiling .scss files.
- due to limited time, I did not care much about the styling and .scss files structure. But app should be responsive and I hope it does not look ugly :) I am not sure what is the best way for styling react-apps, so I am curious what approach prefer developers in Moro :) I'm currently experimenting with styled-components in a larger projects.

### mocha, chai, enzyme

- see tests section below

### prettier, eslint

- prettier as a code formatter (i have install it globally), eslint as a linter

## Notes

### store shape

- I was considering to use normalizr to normalize store shape. But I think it is not necessary in such a small app. In case of deeply nested data API response or really large amount of todo items (no iterating over arrays in reducers → better performance), i would use it.

### immutability

- I know that Moro use ImmutableJS, but I like classic JS Object and Array data types and their methods :) I was trying to ensure immutability using spread operators etc., but I admit that this approach can be challenging in large applications

### file structure

- I prefer modular file structure in larger apps, but in this case is function-first structure ok (in my opinion...)

### tests

- Honestly, I do not have much previous experience with unit/integration testing and none experience with testing Redux applications (I did just some API Testing using Mocha + Chai). It is a shame and I would like to do something with it in near future.
- I tried to use enzyme+chai and write a few example tests. Unfortunately, I have no time for more of them right now. (However, I am quite comfortable with writing e2e in cypress.io)

### API

- would not be better to use PUT/PATCH for "editing" requests?