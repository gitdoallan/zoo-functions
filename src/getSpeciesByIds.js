const data = require('../data/zoo_data');
const dataSpecies = data.species;

function getSpeciesByIds(...ids) {
  const getData = dataSpecies.filter((theAnimalId) => {
    return ids.find((theId) => theId === theAnimalId.id);
  });
  return getData;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
module.exports = getSpeciesByIds;
