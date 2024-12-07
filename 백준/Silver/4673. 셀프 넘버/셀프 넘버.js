let visited = Array(10001).fill(false);
let result = '';

for(let i = 1; i < 10000; i++){
    if(!visited[i]){
        result += i + '\n';
        dfs(i);
    }
}
function dfs(num){
    if(num > 10000){
        return;
    }
    
    visited[num] = true;
    
    let nextNum = num;
    while(num > 0){
        nextNum += num % 10;
        num = Math.floor(num / 10);
    }
    dfs(nextNum);
}
console.log(result);