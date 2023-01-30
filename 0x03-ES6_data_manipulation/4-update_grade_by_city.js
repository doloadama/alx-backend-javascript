<<<<<<< HEAD
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(student = getListStudents, city, newGrades) {
  return student
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = studentGrade ? studentGrade.grade : 'N/A';
      return student;
=======
export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((el) => el.location === city)
    .map((person) => {
      const grades = newGrades.filter((el) => el.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
>>>>>>> 41e8f9aedf5c5a77e80745dacdefe3de9f41d380
    });
}
