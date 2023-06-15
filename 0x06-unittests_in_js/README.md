# Toggle navigation

## Curriculum

### Short Specializations

**Average: 113.19%**

#### 0x06. Unittests in JS

**UnitTests**
- Back-end
- JavaScript
- ES6
- NodeJS
- ExpressJS
- Mocha

**By: Johann Kerbrat, Engineering Manager at Uber Works**
**Weight: 1**

Project will start Jun 14, 2023 3:00 AM, must end by Jun 16, 2023 3:00 AM
Checker was released at Jun 14, 2023 3:00 PM
An auto review will be launched at the deadline

### Resources

Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.youtube.com/watch?v=MLTRHc5dk6s)

### Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

### Requirements

- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

### Tasks

#### 0. Basic test with Mocha and Node assertion library (mandatory)

Install Mocha using npm:

Set up a scripts in your `package.json` to quickly run Mocha using `npm test`

You have to use `assert`

Create a new file named `0-calcul.js`:

Create a function named `calculateNumber`. It should accept two arguments (`number`) `a` and `b`
The function should round `a` and `b` and return the sum of it

Test cases:

Create a file `0-calcul.test.js` that contains test cases of this function
You can assume `a` and `b` are always number
Tests should be around the “rounded” part

Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

Requirements:

You have to use `assert`
You should be able to run the test suite using `npm test 0-calcul.test.js`
Every test should pass without any warning

Expected output:

