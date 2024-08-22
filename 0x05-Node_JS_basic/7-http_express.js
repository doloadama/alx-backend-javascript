const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Function to count students from a CSV file
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const fields = {};
      const students = lines.slice(1);

      students.forEach((student) => {
        const studentData = student.split(',');

        if (studentData.length === 4) {
          const field = studentData[3];
          const firstName = studentData[0];

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(firstName);
        }
      });

      const result = {
        total: students.length,
        fields,
      };
      resolve(result);
    });
  });
}

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for "/students"
app.get('/students', (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\n');
    return;
  }

  countStudents(database)
    .then((result) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${result.total}\n`;
      for (const [field, students] of Object.entries(result.fields)) {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      res.send(response.trim());
    })
    .catch((error) => {
      res.send(error.message);
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other modules or testing
module.exports = app;
