# Demogapic 

## Overview
This project was built so that users can analyse data related to a certain demographic of a population, see the gaps and then use this information make change that will help bridge the gap in order for us to move towards a more egalitarian society. This information should allow a user to see e.g. the number of women in senior positions or men in nurses/teaching positions or LGBTQ+ in STEM etc.

## Heroku Deployment Url
[https://demogapic.herokuapp.com/](https://demogapic.herokuapp.com/)

## Features
- A user can filter through data i.e. name, age, gender, country, job title and senioritiy.

## Running the project
- clone repo
- npm install node.js
- npm start

## Environment Setup Pre Project Building
- npx create-react-app
- npm install --save react-router-dom
- npm install --save @material-ui/core
- npm install @material-ui-styles (JSS - Allows us to customise the material-ui theme- ThemeProvider)
- npm install --save material-ui-icons (Caught me by surpirse: Needed to use the <MenuIcon />)
- Build failed after first commit, heroku said to git rm yarn.lock and rm package-lock.json from project for the build to succeed
- npm install @material-ui/data-grid
- npm install --save react-lottie (Allows us to use animations on our page)
- npm install serve --s (Heroku)

## Dependencies
- React 
- React-Dom
