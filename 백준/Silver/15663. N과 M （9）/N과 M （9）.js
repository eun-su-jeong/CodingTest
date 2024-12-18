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

let visited = new Array(N).fill(0);

dfs(0);
function dfs(index) {
	if (index === M) {
		result.add(arr.join(' '));
		return;
	}
	for (let i = 0; i < N; i++) {
		if (!visited[i]) {
			arr[index] = cards[i];
			visited[i] = 1;
			dfs(index + 1);
			visited[i] = 0;
		}
	}
}
for (let item of result) {
	console.log(item);
}