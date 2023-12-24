function solution(num_list, n) {
    let num = [];
    
    for(let i = n ; i < num_list.length; i++){
        num.push(num_list[i]);  
    }
    for(let i = 0; i < n; i++){
        num.push(num_list[i]);
    }
    return num;
}