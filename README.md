# Demogapic 
Demogapic allows easy access to data so that users can view the inequality among certain demographics at a global scale and make positive change based on the metrics provided.

## Overview
This project was built so that users can analyse data related to a certain demographic of a population, see the gaps and then use this information to make change that will help bridge the gap in order for us to move towards a more egalitarian society. This information should allow a user to see e.g. the number of women in senior positions or men in nurses/teaching positions. Similar to Unbiased Button, this data will be made open-source. The target audience to use this platform will mainly be analysts/ researchers/ change makers who are in need of a large data set that covers name, age, gender, job title, seniority & country.

## Heroku Deployment Url
[https://demogapic.herokuapp.com/](https://demogapic.herokuapp.com/)

## Features
- A user can filter through data i.e. name, age, gender, country, job title and senioritiy.
- A user can view the screen easily on mobile, tablet and laptop with ease.
- A user can easily navigate to each web page easily.
- A user can download the table as a csv file

## Running the project
- clone repo
- npm install node.js
- npm start

# Author Personal Notes
These notes are made for the author on their learning experience of creating this project.

## Environment Setup Pre Project Building/ Dependencies
- npx create-react-app
- npm install --save react-router-dom (Navigation)
- npm install --save @material-ui/core (Access to all MUI components and functionality)
- npm install @material-ui-styles (JSS - Allows us to customise the material-ui theme- ThemeProvider)
- npm install --save material-ui-icons (Caught me by surpirse: MUI have their own library of icons)
- Build failed after first commit, heroku said to git rm yarn.lock and rm package-lock.json from project for the build to succeed - Needed to retrieve package-lock later on.
- npm install @material-ui/data-grid (Needed to use datagrid to view data and filter)
- npm install --save react-lottie (Allows us to use animations on our page)
- npm install serve --s (Needed to install for Heroku build to work)
