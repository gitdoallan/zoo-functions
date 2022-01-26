const data = require('../data/zoo_data');
const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const checkAnimal = species.find((theAnimal) => theAnimal.name === animal);
  const { residents } = checkAnimal;
  const checkAge = residents.every((theResidents) => theResidents.age > age);
  return checkAge;
}
console.log(getAnimalsOlderThan('lions', 5));

module.exports = getAnimalsOlderThan;
