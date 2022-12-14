const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((details) =>
  details.managers.find((checkId) => (checkId === id)));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((theEmployee) =>
    theEmployee.managers.includes(managerId)).map((theEmployee) =>
    `${theEmployee.firstName} ${theEmployee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
