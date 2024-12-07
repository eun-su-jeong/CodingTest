const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);

let arr = [];
let result = [];

dfs(0);
function dfs(idx){
    if(idx === M){
        result.push(arr.join(' '));
        return;
    }
    for(let i = 1; i <= N; i++){
        arr[idx] = i;
        dfs(idx + 1);
    }
}
console.log(result.join('\n'));