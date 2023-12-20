function solution(num_list) {
    const numbers = [...num_list].sort((a,b) => a - b);
    const result = numbers.slice(5);
    
    return result;
}