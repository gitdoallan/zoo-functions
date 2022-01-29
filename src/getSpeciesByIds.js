const data = require('../data/zoo_data');

const dataSpecies = data.species;

function getSpeciesByIds(...ids) {
  const getData = dataSpecies.filter((animalId) => ids.find((theId) => theId === animalId.id));
  return getData;
}

module.exports = getSpeciesByIds;
