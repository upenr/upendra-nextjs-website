const remarkCapitalize = require('remark-capitalize');

const excludedWords = [
  'is',
  'in',
  'About',
  ,
  'IT',
  'CERN',
  'USA',
  'IBM',
  'PowerAI',
  'GPU'
];

module.exports = remarkCapitalize({
  special: excludedWords
});
