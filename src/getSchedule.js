const data = require('../data/zoo_data');
const { hours, species } = data;

const theWeekdays = () => Object.keys(hours);
const theSpeciesNames = () => species.map(({ name }) => name);
const weekdaySpecies = (weekday) => species.filter((specie) => specie.availability.includes(weekday)).map(({ name }) => name);
const weekdaySpecie = (specieName) => species.find(({ name }) => name === specieName).availability;
const theWeekdaySchedule = (weekday) => {
  const { open, close } = hours[weekday];
  return weekday === 'Monday' ? {officeHour: 'CLOSED', exhibition: 'The zoo will be closed!'} : {officeHour: `Open from ${open}am until ${close}pm`, exhibition: weekdaySpecies(weekday) };
}
const theSchedule = (schedule, weekday) => ({...schedule, [weekday]: theWeekdaySchedule(weekday)});
const showSchedule = () => theWeekdays().reduce(theSchedule, {});

function getSchedule(theSchedule) {
  const speciesNames = theSpeciesNames();
  if (speciesNames.includes(theSchedule)) {
    return weekdaySpecie(theSchedule);
  }
  const schedule = showSchedule();
  if (theSchedule in schedule) {
    return { [theSchedule]: schedule[theSchedule] };
  }
  return schedule;
}

module.exports = getSchedule;