const fs = require('fs');
const path = require('path');

console.log('reading index.html');

var index = "";

fs.readFile(path.join(__dirname, '..', 'index.html'), (err, data) => {
  index += data;

  // TODO read every thing but the main.
  document.add

  console.log(index);
});