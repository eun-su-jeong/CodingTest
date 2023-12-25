function solution(myString) {
    let answer = myString.split("x");
    let result = [];
    for(let i = 0; i < answer.length; i++){
        result[i] = answer[i].length;
    }
    return result;
}

