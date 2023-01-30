export default function updateStudentGradeByCity(student , city, newGrades) {
  return student
    .filter(student => student.location === city)
    .map(student => {
      let studentGrade = newGrades.find(grade => grade.studentId === student.id);
      student.grade = studentGrade ? studentGrade.grade : "N/A";
      return student;
    });
}
