function solution(arr) {
    while(twoPwo(arr.length) > arr.length){
        arr.push(0);
    }
    return arr;
}

function twoPwo(num) {
    let two = 1;
    while(num > two) {
        two *= 2;
    }
    return two;
}