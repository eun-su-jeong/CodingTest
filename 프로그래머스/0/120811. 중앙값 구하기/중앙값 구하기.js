function solution(array) {
    array.sort((a,b) => a - b);
    let idx = Math.floor((array.length) / 2);
    return array[idx];
}