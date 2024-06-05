let count = 0;

function solution(numbers, target) {
    dfs(numbers, target, 0, 0);
    return count;
}
function dfs (numbers, target, sum, idx){
    if(numbers.length === idx){
        if(target === sum){
            count++;
        }
        return;
    }
    dfs(numbers, target, sum + numbers[idx], idx+1);
    dfs(numbers, target, sum - numbers[idx], idx+1);
}




// 탈출조건

// DFS

// 배열, 타겟(숫자결과값), numbers.length, index 경우의 수 구하기 sum == target

// 생각의 회로가 어뜨케 되나염????????


