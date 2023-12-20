function solution(n, k) {
    let answer = [];
    let count = 0;
    
    for(let i = 0; i < n; i++){
        num = i + 1;
          if (num % k == 0) { 
                answer[count] = num;
                count++;
            }
    }
    return answer;
}

