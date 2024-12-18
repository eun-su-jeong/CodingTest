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
let result = new Set();

dfs(0, 0);
function dfs(index, start) {
	if (index === M) {
		result.add(arr.join(' '));
		return;
	}
	for (let i = start; i < N; i++) {
		arr[index] = cards[i];
		dfs(index + 1, i + 1);
	}
}
for (let item of result) {
	console.log(item);
}