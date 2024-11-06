function solution(array) {
    let count = 0;
    let numbers = String(array);
    
    for(num of numbers){
        if(num === '7'){
            count++
        }
    }
    return count;
}