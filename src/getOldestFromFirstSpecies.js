const data = require('../data/zoo_data');

const { employees, species } = data;

const employeeId = (id) => employees.find((employee) => employee.id === id);
const specieId = (id) => species.find((specie) => specie.id === id);
const specieOldest = (specie) => [...specie.residents].sort((a, b) => b.age - a.age)[0];

function getOldestFromFirstSpecies(theId) {
  return Object.values(specieOldest(specieId(employeeId(theId).responsibleFor[0])));
}

module.exports = getOldestFromFirstSpecies;
