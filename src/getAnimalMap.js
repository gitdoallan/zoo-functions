const data = require('../data/zoo_data');

const showSpeciesLocation = () => [...new Set(data.species.map(({ location }) => location))];
const locationSpecies = (location) => data.species.filter((specie) => specie.location === location);

const showWithFilter = (residents, sex) => {
  const animals = sex ? residents.filter((resident) => resident.sex === sex) : residents;
  return animals.map((animal) => animal.name);
}

const showWithName = (species, { sorted, sex }) => species.map((specie) => {
  const names = showWithFilter(specie.residents, sex); 
  if (sorted) names.sort();
  return { [specie.name]: names };
});

const speciesName = (species) => species.map((specie) => specie.name);
const locationSearch = (location, values) => values.includeNames ? showWithName(locationSpecies(location), values) : speciesName(locationSpecies(location));

const animalMap = (values) => (animalMap, location) => ({...animalMap, [location]: locationSearch(location, values)})

function getAnimalMap(values = {}) {
  return showSpeciesLocation().reduce(animalMap(values), {});
}

module.exports = getAnimalMap;