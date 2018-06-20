# "Would you rather" React App

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
