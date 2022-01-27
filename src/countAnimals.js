const data = require('../data/zoo_data');
const { species } = data;

const specieName = (theAnimal) => species.find((theSpecie) => theSpecie.name === theAnimal);
const theCounter = (acc, theSpecie) => ({...acc, [theSpecie.name]: theSpecie.residents.length});
const countAnimals = (animal) => {
  if (!animal) { return species.reduce(theCounter, {}); }
  const specie = specieName(animal.specie);
  const residents = animal.sex
    ? specie.residents.filter((resident) => resident.sex === animal.sex)
    : specie.residents;
  return residents.length;
}

module.exports = countAnimals;