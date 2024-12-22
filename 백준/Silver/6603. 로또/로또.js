// input.txt 파일에서 입력값을 읽음
const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sArr = [];
let K = -1;
let cards = [];
for (let i = 0; i < input.length - 1; i++) {
	cards = input[i].split(' ').map(Number);
	K = cards[0];
	cards.splice(0, 1);
	dfs(0, 0);
	console.log();
}

function dfs(index, start) {
	if (index == 6) {
		console.log(sArr.join(' '));
		return;
	}

	for (let i = start; i < K; i++) {
		sArr[index] = cards[i];
		dfs(index + 1, i + 1);
	}
}