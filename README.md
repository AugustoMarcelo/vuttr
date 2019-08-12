# BossaBox Challenge
The challenge, required to continue the registration on the platform is to develop an API for managing a tool repository whit their respective _titles_, _links_, _descriptions_ and _tags_.

## Libraries used
 - **express**: Microframework to handle routes, requests and responses

 - **nodemon**: Library used to monitor code changes and restart the server automatically

 - **mongoose**: ODM used to handle the *MongoDB*

 - **mongodb-memory-server**: A package thar runs a mongodb database and saves de data in memory. Fast and great for testing applications that don't use complex relationships

 - **jest**: Framework provided by Facebook, used for testing. And in conjunction with the jest library. `@types/jest` was also use to add intellisense to jest

 - **supertest**: Library used to make requests


## Tools to facilitate the development
 - *eslint*
 - *prettier*
 - *editorConfig*
 - *dotenv*

---

## How to run the application

1. You need to install `MongoDB`. I did it using the <a href="https://www.docker.com/">`docker`</a> as follows:
```cmd
  docker run --name vuttr -p 27017:27017 -d -t mongo
```

2. You must have <a href="https://nodejs.org/en/">`node`</a> installed on your machine;

3. I used <a href="https://yarnpkg.com/pt-BR/docs/getting-started">`yarn`</a> as a dependency manager. With it installed, you can run `yarn` inside the project root to download project dependencies;

4. And finally, you can run your server via `yarn dev`. The application will run on port `3000`. Then you can call it at url `http://localhost:3000`.

