const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N 추출
const N = Number(input[0]);

let arr = [];
let result = [];
let visited = new Array(N).fill(0);

dfs(0);
function dfs(index) {
	if (index === N) {
		result.push(arr.join(' '));
		return;
	}
	for (let i = 1; i <= N; i++) {
		if (!visited[i]) {
			arr[index] = i;
			visited[i] = 1;
			dfs(index + 1);
			visited[i] = 0;
		}
	}
}
console.log(result.join('\n'));