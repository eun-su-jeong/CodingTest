function solution(myString, pat) {
    let answer = '';
    for(let i = 0; i < myString.length; i++){
       let str = myString.slice(0 , i + 1);
        if(str.endsWith(pat)){
            answer = str;
        }
    }
    return answer;
}