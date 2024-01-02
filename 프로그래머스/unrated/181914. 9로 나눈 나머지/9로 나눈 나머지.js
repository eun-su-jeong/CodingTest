function solution(number) {
    let num = [...number].map(Number);
    let sum = 0;
    
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum % 9;
}