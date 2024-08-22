import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const lines = data.trim().split('\n').slice(1); // Skip the header line

      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');

        if (firstName && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        }
      });

      resolve(students);
    });
  });
}
