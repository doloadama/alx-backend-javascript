interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
}
const studentA: Student = {
  firstName: 'Luffy',
  lastName: 'Monkey D',
  age: 22,
  location: 'laughtel',
};

const studentB: Student = {
  firstName : 'Zoro',
  lastName: 'pirates hunter',
  age: 30,
  location: 'lost',
};

const studentsList: Student[] = [studentA, studentB];

const table: HTMLElement | null = document.getElementById('student-table');

// check if the table element exists
if (table) {
  // loop through the studentsList array
  for (const student of studentsList) {
    // create a new row element
    const row = document.createElement('tr');

    // create the first name cell
    const firstNameCell = document.createElement('td');
    firstNameCell.innerHTML = student.firstName;

    // create the location cell
    const locationCell = document.createElement('td');
    locationCell.innerHTML = student.location;

    // append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // append the row to the table
    table.appendChild(row);
  }
}