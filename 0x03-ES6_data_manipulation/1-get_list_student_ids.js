export default function getListStudentIds(...arg) {
  if (!Array.isArray(students)) return [];
  return arg.map((elem) => elem.id);
}
