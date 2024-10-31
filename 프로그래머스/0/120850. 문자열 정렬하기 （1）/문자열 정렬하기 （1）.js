function solution(my_string) {
    var answer = [];
    
    answer= Array.from(my_string)
            .filter(char => !isNaN(char) && char != ' ')
            .map(Number)
            .sort((a, b) => a - b);
    
    return answer;
}