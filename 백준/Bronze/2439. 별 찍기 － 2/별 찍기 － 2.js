var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const n = parseInt(input, 10);
//첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
//하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
// 1부터 n까지 반복하며 공백과 별을 출력
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n-i)+'*'.repeat(i));
}