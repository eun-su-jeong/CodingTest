const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);

let result = [];
let arr = Array(M).fill(0);

dfs(0);

function dfs(index) {
    if (index === M) {
        result.push(arr.join(' '));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!arr.includes(i)) { // visited 배열 대신 arr에 포함 여부로 중복 방지
            arr[index] = i;
            dfs(index + 1);
            arr[index] = 0; // 복구
        }
    }
}

// 최종 결과 한 번에 출력
console.log(result.join('\n'));