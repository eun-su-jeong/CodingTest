function solution(numLog) {
    let answer = '';
    for(let i = 0; i < numLog.length; i++){
        const num = numLog[i] - numLog[i - 1];
        if(num === 1){
            answer += "w";
        }else if(num === -1){
            answer += "s";
        }else if(num === 10){
            answer += "d";
        }else if(num === -10){
            answer += "a";
        }
    }
    return answer;
}