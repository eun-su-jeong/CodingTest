const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);
//N 수열
let arr = [];

for(let i = 1; i <= M; i++){
    arr.push(0);
}

let visited = new Array(N).fill(false);

dfs(0, arr, visited, N, M);
function dfs(index, arr, visited, N, M){
     if(index === M){
         console.log(arr.join(' '));
         return;
     }

     for (let i = 0; i < N; i++){
         if (!visited[i]) {
            arr[index] = i + 1;
            visited[i] = true;
            dfs(index + 1, arr, visited, N, M);
            visited[i] = false;
         }
     }
}