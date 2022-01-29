const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const checkAnimal = species.find((theAnimal) => theAnimal.name === animal);
  const { residents } = checkAnimal;
  return residents.every((theResidents) => theResidents.age > age);
}

module.exports = getAnimalsOlderThan;
