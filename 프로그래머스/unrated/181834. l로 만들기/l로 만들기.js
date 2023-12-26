function solution(myString) {
    let answer = '';
    for(let i = 0; i < myString.length; i++){
        let result = myString.charAt(i);
        
        if(result < 'l'){
            answer += 'l'
        }else{
            answer += result;
        }
    }
    return answer;
}