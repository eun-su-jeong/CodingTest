const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);

// 두 번째 줄에서 카드 배열 추출
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);

let arr = [];
let result = [];

dfs(0);
function dfs(index){
    if(index === M){
        result.push(arr.join(' '));
        return;
    }
    for(let i = 0; i < N; i++){
        if(!arr.includes(numbers[i])){
            arr[index] = numbers[i];
            dfs(index + 1);
            arr[index] = 0;
        }
    }
}
console.log(result.join('\n'));