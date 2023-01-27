export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberofDepartements(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
