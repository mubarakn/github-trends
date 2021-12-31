# Read this before starting this project

The links which you provided for the assignment doesn't work so, I had to crawl the trending page to fetch the repositories and developers based on date range.
The crawler code can be found [here](https://gist.github.com/mubarakn/2a7a0ed245dd86deac809603512455f6).

The crawler should be run in browser console because if curl is used it will throw CORS.

# How to start the Project

### `npm run server`
This command uses the json-server library to serve db.json file in REST Api. You should execute this command first in a terminal before running react. The server will run on port 3001 (you can modify this in package.json file.)\
Open [http://localhost:3001/developers](http://localhost:3001/developers) to view all developers.\
Open [http://localhost:3001/repositories](http://localhost:3001/repositories) to view all repositories.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Assignment requirements checklist
:white_check_mark: You must follow React best practices and the latest standards when building your app.\
:white_check_mark: You must use react-router\
:white_check_mark: The implementation must be as close as possible to the provided designs.\
:white_check_mark: Feel free to use any css library if needed.\
:white_check_mark: Using typescript is a plus.\
:white_check_mark: Using react-query is a plus.\