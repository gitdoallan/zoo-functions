const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const getEmployeeDetails = employees.find((theEmployee) =>
    (theEmployee.firstName === employeeName || theEmployee.lastName === employeeName));
  if (getEmployeeDetails === undefined) {
    return {};
  }
  return getEmployeeDetails;
}

module.exports = getEmployeeByName;
