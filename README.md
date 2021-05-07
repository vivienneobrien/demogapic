# Demogapic 
Project name taken from the word "demographic" to help bridge the gap between minorities in our global population.

## Overview
This project was built so that users can analyse data related to a certain demographic to bridge the gap between minorities. 

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
