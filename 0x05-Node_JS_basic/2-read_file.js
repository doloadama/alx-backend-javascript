const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const fieldCounts = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const fields = line.split(',');

      if (fields.length === 1 && fields[0].trim() === '') {
        // Skip empty lines
        continue;
      }

      for (let j = 1; j < fields.length; j += 1) {
        const field = fields[j].trim();

        if (field !== '') {
          if (fieldCounts[field]) {
            fieldCounts[field] += 1;
          } else {
            fieldCounts[field] = 1;
          }
        }
      }
    }

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const studentsList = lines
          .slice(1)
          .filter((line) => {
            const fields = line.split(',');
            return fields.includes(field);
          })
          .map((line) => line.split(',')[0].trim())
          .join(', ');

        console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
