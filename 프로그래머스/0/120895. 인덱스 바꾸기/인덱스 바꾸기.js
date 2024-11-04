function solution(my_string, num1, num2) {
    let string = my_string.split('');
    [string[num1], string[num2]] = [string[num2], string[num1]];    
    return string.join('');
}