var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const n = parseInt(input, 10);

// 1부터 n까지 반복하며 별을 출력
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}
