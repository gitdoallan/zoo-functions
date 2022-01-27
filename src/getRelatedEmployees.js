const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  const checkManager = employees.some((details) => details.managers.find((checkId) => (checkId === id) ));
  return checkManager;
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees = employees.filter((theEmployee) => theEmployee.managers.includes(managerId));
  const theManagedNames = managedEmployees.map((theEmployee) => `${theEmployee.firstName} ${theEmployee.lastName}`);
  return theManagedNames;
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
