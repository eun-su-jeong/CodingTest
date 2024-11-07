function solution(numbers) {
    let sort = numbers.sort((a,b) => a - b);
    let lastValue = sort[sort.length - 1];
    let secondValue = sort[sort.length - 2];
    
    return lastValue * secondValue;
}