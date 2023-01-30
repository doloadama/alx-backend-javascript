<<<<<<< HEAD
import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';
=======
import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';
>>>>>>> 4c72c3f1feddb390d6dc54a19f9c79e7cf227e9f

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
