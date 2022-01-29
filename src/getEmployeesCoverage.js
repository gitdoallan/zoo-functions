const data = require('../data/zoo_data');

const { employees } = data;
const getSpeciesByIds = require('./getSpeciesByIds');

const employeeId = (id) => employees.find((employee) => employee.id === id);
const employeeName = (name) => employees.find((theName) =>
  theName.firstName === name || theName.lastName === name);
const speciesLocation = (species) => species.map((specie) => specie.location);
const speciesName = (species) => species.map((specie) => specie.name);

const employeeCoverage = (employee) => {
  const locations = speciesLocation(getSpeciesByIds(...employee.responsibleFor));
  return { id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesName(getSpeciesByIds(...employee.responsibleFor)),
    locations };
};

function getEmployeesCoverage(options) {
  if (options === undefined) { return employees.map((employee) => employeeCoverage(employee)); }
  const employee = options.id ? employeeId(options.id) : employeeName(options.name);
  if (employee === undefined) { throw new Error('Informações inválidas'); }
  return employeeCoverage(employee);
}

module.exports = getEmployeesCoverage;
