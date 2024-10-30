function solution(numbers) {
    let total = 0;
    const sum = numbers.reduce((sum,digit) => sum + digit);
    
    for(let i = 0; i < 10; i++){
        total += i;
    }
    return total - sum;
}