function solution(numbers) {
    let sort = numbers.sort((a,b) => a - b);
    let answer1 = sort[sort.length - 1] * sort[sort.length - 2];
    let answer2 = sort[0] * sort[1];

    return answer1 > answer2 ? answer1 : answer2;
    
}