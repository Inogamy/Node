const fs = require('fs');

const content = fs.readFileSync( 'readme.md', 'utf-8');

const wordCount = content.split(' ');
const readwordCount = content.match(/react/gi ?? []).length;

console.log('Contador: ', wordCount.length);
console.log('Contador: ', readwordCount);

