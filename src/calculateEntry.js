const { prices } = require('../data/zoo_data');

const checkCat = (age) => age < 18 ? 'child' : age < 50 ? 'adult' : 'senior';
const countCat = (acc, cat) => ({...acc, [cat]: acc[cat] +1,});
const countEntrants = (entrants) => entrants.map(({ age }) => checkCat(age)).reduce(countCat, { child: 0, adult: 0, senior: 0 });
const theCounter = (i) => (acc, cat) => acc + prices[cat] * i[cat];
const checkEmpty = (value) => { return value === undefined || Object.keys(value).length === 0; }
const calculateEntry = (entrants) => (checkEmpty(entrants) ? 0 : ['child', 'adult', 'senior'].reduce(theCounter(countEntrants(entrants)), 0));

module.exports = { calculateEntry, countEntrants };