const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');
        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const fields = {};
        const students = lines.slice(1);

        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);
        for (const [field, list] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
