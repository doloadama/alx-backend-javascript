const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line !== ''); // Remove empty lines
        const studentsByField = {};

        for (const line of lines) {
            const fields = line.split(',');
            const firstName = fields[0].trim();
            const field = fields[fields.length - 1].trim();

            if (field !== 'field') { // Skip header line
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(firstName);
            }
        }

        console.log(`Number of students: ${lines.length - 1}`);
        
        for (const field in studentsByField) {
            const studentsList = studentsByField[field].join(', ');
            console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
