function solution(my_string, n) {
    const string = [...my_string];
    let answer = [];
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < n; j++){
            answer+=(string[i]);
        }
    }
        return String(answer);
}