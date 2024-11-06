function solution(my_str, n) {
    const sliceArray = [];
    for(let i = 0; i < my_str.length; i++){
        if(i % n == 0)
        sliceArray.push(my_str.slice(i, n + i));
        
    }
    return sliceArray;
}