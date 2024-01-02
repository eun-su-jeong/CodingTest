function solution(arr) {
    let answer = [];
    const n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            answer = arr[i][j] = arr[j][i] ? 1 : 0;
        }
    }
    return answer;
}

