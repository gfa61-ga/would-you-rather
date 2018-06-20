# "Would you rather" React App

+ deployed online version:
[see demo](https://paulkoegel-wessels.github.io/would-you-rather/)

## Features
A simple React demo app where you can:
- log in as one of three predefined users (no password required)
- answer questions
- create new questions
- see counts and percentages of total answers
- see a leaderboard which ranks users by the aggregat of their total given answers and created questions
- log out to change your user

N.b.: new questions are not persisted and will disappear after a page reload.
For more details, see [REQUIREMENTS](./REQUIREMENTS.mdown).

#### Bonus Features
- when trying to access a question directly (e.g. [http://localhost:3000/questions/am8ehyc8byjqgar0jgpub9](http://localhost:3000/questions/am8ehyc8byjqgar0jgpub9)) the user will first be asked to log in and after login the poll's page will open automatically
- Debug toolbox in the top right corner to change the API-Request delay so loading spinners can be inspected.

## Setup
+ Install npm packages with:  
  `$ yarn`

## App Start
+ Start the development server with:  
  `$ yarn start`
+ Should it not be opened automatically, open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
`yarn deploy`

## Routing on Github Pages
+ General setup instructions I followed:[https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)
+ Configured React Router with a basename, see [index.js](src/index.js) and: [https://github.com/facebook/create-react-app/issues/1765#issuecomment-327615099](https://github.com/facebook/create-react-app/issues/1765#issuecomment-327615099)
+ to get around the fact that Github doesn't offer a catchall route that redirect, e.g. `/search` to [index.html](public/index.html), this app uses a workaround that redirects from a [custom 404 page](public/404.html) to an app URL. Sources:
  - [https://github.com/rafrex/spa-github-pages](https://github.com/rafrex/spa-github-pages)
  - [https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#notes-on-client-side-routing)
