function solution(s) {
    let word = (Array.from(s));
    let unique = [...new Set(word)];
    let answer = unique.filter(char => word.indexOf(char) === word.lastIndexOf(char)).sort();
    
    return answer.join('');
    
   
}