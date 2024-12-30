const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const visited = new Array(N + 1).fill(0);

const graph = {};
for (let i = 1; i <= N; i++) {
	graph[i] = [];
}

for (let i = 2; i <= M + 1; i++) {
	const [a, b] = input[i].split(' ').map(Number);
	graph[a].push(b);
	graph[b].push(a);
}

function countConnectedNodes(start, graph, visited) {
	let count = 0;

	function dfs(node) {
		visited[node] = true;
		count++;

		for (let neighbor of graph[node]) {
			if (!visited[neighbor]) {
				dfs(neighbor);
			}
		}
	}
	dfs(start);
	return count - 1;
}
console.log(countConnectedNodes(1, graph, visited));
// 첫째 줄 : 컴퓨터의 수  100 이하인 정수 => 7
// 1 부터 차례대로 번호가 매겨짐
// 둘째 줄 : 컴퓨터 쌍의 수 => 6