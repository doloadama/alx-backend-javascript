import getListStudents from './0-get_list_students';
export default function updateStudentGradeByCity (student = getListStudents, city, newGrades) {
  return student
    .filter(student => student.location === city)
    .map(student => {
      let studentGrade = newGrades.find(grade => grade.studentId === student.id);
      student.grade = studentGrade ? studentGrade.grade : "N/A";
      return student;
    });
}
