# Image-Processing-API
***
Building an API that can be used in two different ways.The first allows you to place images into your frontend with the size set via URL parameters.The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.
***

## What I learned 
- NodeJS (Set up Node.js project from scratch, install all dependencies)
- Work with Node Package Manager (NPM)
- Working with Typescript in professional environments (Writing asynchronous code)
- Unit testing and test-driven development (TDD)
- Writing and running tests
- Working with Express (To create an API)
- Adding Middleware
- Using the File System Module

 
## Tools
- Use TypeScript to reduce typing errors
- Write tests with Jasmine
- Use Node.js and Express to build a server




##  Prerequisites installation
You need to install the following: 
- [Node & NPM](https://nodejs.org/en/download/)
- [Typescript](https://www.npmjs.com/package/typescript)

## Setup:
Make sure you installed the `npm`  
- `npm install`
- `npm --v` (Check your version)

## Scripts need to run: 
- `npm run start` (for run the server).
- Entry point : http://localhost:3000/api
- End point : http://localhost:3000/api/images
- Access image processing functionality. Ex: http://localhost:3000/api/images/?filename=fjord&width=300&height=300 | **important: only change the width and height number**
- For tasting the cases `npm run test` in terminal.


## NPM used: 
- [Jasmine](https://www.npmjs.com/package/jasmine) For testing 
- [Express](https://www.npmjs.com/package/express)  For running server 
- [nodemon](https://www.npmjs.com/package/nodemon) Automatically restarting the node application when file change
- [Sharp](https://www.npmjs.com/package/sharp) For images processing
- [SuperTest](https://www.npmjs.com/package/supertest) For testing HTTP
- [Prettier](https://www.npmjs.com/package/prettier) For code formatting
- [ESLint](https://www.npmjs.com/package/eslint) for identifying and reporting on patterns



