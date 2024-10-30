var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const totalStudents = Array.from({length: 30},(_, i) => i + 1);

const result = totalStudents.filter(num => !input.includes(num));

result.sort((a, b) => a - b);

console.log(result[0]);
console.log(result[1]);
