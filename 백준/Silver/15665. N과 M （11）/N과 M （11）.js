const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);
const cards = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

let arr = [];
let result = [];

dfs(0);
function dfs(index) {
	if (index === M) {
		result.push(arr.join(' '));
		return;
	}
	
	let preValue = -1;
	for (let i = 0; i < N; i++) {
		if (preValue != cards[i]) {
			arr[index] = cards[i];
			dfs(index + 1);
			preValue = cards[i];
		}
	}
}

console.log(result.join('\n'));