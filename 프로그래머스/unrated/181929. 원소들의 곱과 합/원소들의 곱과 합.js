function solution(num_list) {
    let answer = 1;
    let result = 0;
    num_list.forEach(function (number) {
        answer *= number;
        result += number;
    });
    return result*result > answer ? 1 : 0;
}
