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

    // Initialize an object to store the counts for each field
    const fieldCounts = {};

    // Loop through the lines and count the number of students in each field
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const fields = line.split(',');

      // Skip empty lines
      if (fields.length === 1 && fields[0].trim() === '') {
        continue;
      }

      // Loop through the fields and count the students in each field
      for (let j = 1; j < fields.length; j += 1) {
        const field = fields[j].trim();

        // Skip empty fields
        if (field === '') {
          // Skip the current iteration
          continue;
        }

        // Increment the count for the field
        if (fieldCounts[field]) {
          fieldCounts[field] += 1;
        } else {
          fieldCounts[field] = 1;
        }
      }
    }

    // Log the counts for each field
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const studentsList = lines
          .slice(1) // Exclude the header line
          .filter((line) => {
            const fields = line.split(',');
            return fields.includes(field);
          })
          .map((line) => line.split(',')[0].trim()) // Extract the firstname
          .join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      }
    }
  } catch (error) {
    // Handle the error if the database file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
