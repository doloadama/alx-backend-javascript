const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream(path),
            crlfDelay: Infinity
        });

        const studentsByField = {};

        rl.on('line', (line) => {
            const fields = line.split(',');
            const firstName = fields[0].trim();
            const field = fields[fields.length - 1].trim();

            if (field !== 'field') { // Skip header line
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(firstName);
            }
        });

        rl.on('close', () => {
            let totalStudents = 0;

            for (const field in studentsByField) {
                const studentsList = studentsByField[field].join(', ');
                console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsList}`);
                totalStudents += studentsByField[field].length;
            }

            console.log(`Number of students: ${totalStudents}`);
        });
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
