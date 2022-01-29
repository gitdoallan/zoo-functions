const { prices } = require('../data/zoo_data');

const checkCat = (age) => {
  if (age < 18) {
    return 'child';
  } if (age < 50) {
    return 'adult';
  } return 'senior';
};
const countCat = (acc, cat) => ({ ...acc, [cat]: acc[cat] + 1 });
const countEntrants = (entrants) => entrants.map(({ age }) =>
  checkCat(age)).reduce(countCat, { child: 0, adult: 0, senior: 0 });
const theCounter = (i) => (acc, cat) => acc + prices[cat] * i[cat];
const checkEmpty = (value) => value === undefined || Object.keys(value).length === 0;
const calculateEntry = (entrants) => (checkEmpty(entrants)
  ? 0 : ['child', 'adult', 'senior'].reduce(theCounter(countEntrants(entrants)), 0));

module.exports = { calculateEntry, countEntrants };
