function solution(num_list) {
    let even = [];
    let odd = [];
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0){
            even.push(num_list[i]);
        }else{
            odd.push(num_list[i]);
        }
    }
    return [even.length, odd.length];
}