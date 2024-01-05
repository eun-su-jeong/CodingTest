function solution(my_string, s, e) {
    let answer = my_string.slice(0, s) + reverseString(my_string.slice(s, e + 1)) + my_string.slice(e + 1);
    return answer;
}

function reverseString(str) {
    return [...str].reverse().join('');
}
