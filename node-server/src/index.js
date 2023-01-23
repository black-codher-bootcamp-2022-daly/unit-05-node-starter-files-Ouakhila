const fs = require('fs');

const content = fs.readFileSync('textfile.txt','utf8');
console.info(content);
