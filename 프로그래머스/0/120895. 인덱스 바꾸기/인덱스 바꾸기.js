function solution(my_string, num1, num2) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
        if(num1 === i){
            answer += my_string[num2];
        }else if(num2 === i){
            answer += my_string[num1];
        }else{
            answer += my_string[i];
        }
    }
    return answer;
}
// num1과 num2의 값을 구한다 
// my_string을 for문을 돌린다
// my_string[i] 와 같은 값? 위치를 반대로 지정해 출력한다