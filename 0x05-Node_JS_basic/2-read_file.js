const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Get the number of students
    const numberOfStudents = lines.length - 1; // Exclude the header line

    // Log the number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Loop through the fields and count the number of students in each field
    const fields = lines[0].split(',');
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      let count = 0;
      const list = [];

      // Loop through the student data and count the number of students in the field
      for (let j = 1; j < lines.length; j++) {
        const studentData = lines[j].split(',');
        const fieldValue = studentData[i].trim();

        // Check if the field value is not empty
        if (fieldValue !== '') {
          count++;
          list.push(studentData[0].trim()); // Add the student's firstname to the list
        }
      }

      // Log the number of students in the field and the list of firstnames
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    // Handle the error if the database file cannot be loaded
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
