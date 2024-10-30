var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const n = parseInt(input, 10);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
