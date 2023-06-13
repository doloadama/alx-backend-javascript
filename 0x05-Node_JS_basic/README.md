# Project Title

NodeJS Basics

## Table of Contents

- [Project Description](#project-description)
- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Tasks](#tasks)
  - [Executing basic javascript with Node JS](#executing-basic-javascript-with-node-js)
  - [Using Process stdin](#using-process-stdin)
  - [Reading a file synchronously with Node JS](#reading-a-file-synchronously-with-node-js)
  - [Reading a file asynchronously with Node JS](#reading-a-file-asynchronously-with-node-js)
  - [Create a small HTTP server using Node's HTTP module](#create-a-small-http-server-using-nodes-http-module)
  - [Create a more complex HTTP server using Node's HTTP module](#create-a-more-complex-http-server-using-nodes-http-module)
  - [Create a small HTTP server using Express](#create-a-small-http-server-using-express)
  - [Create a more complex HTTP server using Express](#create-a-more-complex-http-server-using-express)
  - [Organize a complex HTTP server using Express](#organize-a-complex-http-server-using-express)

## Project Description

This project is part of the curriculum for [NodeJS Basics](#) and covers various tasks related to Node.js, JavaScript, ES6, and Express.js. The goal of this project is to familiarize learners with the basics of Node.js and its modules, file operations, HTTP server creation, and using Express.js to build more complex servers.

## Resources

- [Node JS getting started](#)
- [Process API doc](#)
- [Child process](#)
- [Express getting started](#)
- [Mocha documentation](#)
- [Nodemon documentation](#)

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using Node.js
- Use Node.js modules
- Use specific Node.js modules to read files
- Use the process object to access command line arguments and the environment
- Create a small HTTP server using Node.js
- Create a small HTTP server using Express.js
- Create advanced routes with Express.js
- Use ES6 with Node.js using Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the project folder, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint checks. You can verify the entire project by running `npm run full-test`
- All of your functions/classes must be exported using the following format: `module.exports = myFunction;`

## Tasks

### Executing basic javascript with Node JS

**File:** `0-console.js`

In the file `0-console.js`, create a function named `displayMessage` that prints the string argument to the standard output (STDOUT).

Example usage:

```bash
$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

$ node 0-main.js
Hello NodeJS!
$
```

### Using Process stdin

**File:** `1-stdin.js`

Create a program named `1-stdin.js` that will be executed through the command line
