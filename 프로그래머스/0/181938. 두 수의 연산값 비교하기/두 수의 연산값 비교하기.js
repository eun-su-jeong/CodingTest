function solution(a, b) {
    const result1 = Number(`${a}${b}`);
    const result2 = 2 * a * b;
    
    return Math.max(result1, result2);
}