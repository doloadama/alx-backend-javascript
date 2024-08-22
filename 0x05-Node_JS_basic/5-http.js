const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to count students
const countStudents = (database) => {
  return new Promise((resolve, reject) => {
    const filePath = path.resolve(database);
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const fields = {};
        lines.forEach((line, index) => {
          if (index !== 0) {
            const [firstName, lastName, age, field] = line.split(',');
            if (field in fields) {
              fields[field].push(firstName);
            } else {
              fields[field] = [firstName];
            }
          }
        });
        let output = `Number of students: ${lines.length - 1}\n`;
        for (const [field, students] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        resolve(output.trim());
      }
    });
  });
};

// Create the server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2];  // The database file should be passed as an argument
    if (!database) {
      res.end('This is the list of our students\nCannot load the database');
    } else {
      countStudents(database)
        .then((data) => {
          res.end(`This is the list of our students\n${data}`);
        })
        .catch((err) => {
          res.end(`This is the list of our students\n${err.message}`);
        });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
