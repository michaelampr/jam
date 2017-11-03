const dataFile = './_data/jam-icons.json';
const data = require(dataFile);
const fs = require('fs');

const icons = {};

data.icons.forEach(i => {
  i.svg = fs.readFileSync(`${__dirname}/svg/${i.file}`, 'utf8');
  icons[i.name] = i
});

module.exports = icons;
