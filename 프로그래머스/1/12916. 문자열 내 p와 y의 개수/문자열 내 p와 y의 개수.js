function solution(s){
    const string = s.toLowerCase();
    const target1 = 'p';
    const target2 = 'y';
    
    const count1 = string.split('').filter(char => char == target1).length;
    const count2 = string.split('').filter(char => char == target2).length;
    
    return count1 === count2 ? true : false;
}