function solution(my_string) {
    
    return Array.from(my_string)
        .filter(char => !isNaN(char))
        .map(Number)
        .sort((a,b) => a - b);
}