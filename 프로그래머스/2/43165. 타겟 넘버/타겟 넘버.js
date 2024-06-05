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
    dfs(numbers, target, sum + numbers[idx], idx + 1);
    dfs(numbers, target, sum - numbers[idx], idx + 1);
}

// 0. 어떤 알고리즘 문제 인지 dfs -> 재귀 함수
// 1. 필요한 매개변수 
// -> (숫자가 담긴 배열, 주어진 숫자, 적절히 더하거나 빼거나, 배열이니까 인덱스)
// -> (numbers, target, sum, idx)
// 2. 구해야 되는 값 : 타겟 넘버를 만드는 방법의 수 
// 3. 탈출 조건 : 흠.. 바로 생각이 안나네ㅜ 계속 더할 수 없으니까... 흠.. 