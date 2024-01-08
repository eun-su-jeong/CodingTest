function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        let prev = queries[i][0];
        let next = queries[i][1];
        
        let tmp = arr[prev];
        arr[prev] = arr[next];
        arr[next] = tmp;
    }
    return arr;
}