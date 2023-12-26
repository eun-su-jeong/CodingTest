function solution(my_string) {
    let answer = [];
    let str = my_string.substring(0, my_string.length);
    let sub = '';
    for(let i = 0;  i < my_string.length; i++){
        sub = str.substring(i);
        answer.push(sub);
    }
    answer.sort();
    return answer;
}