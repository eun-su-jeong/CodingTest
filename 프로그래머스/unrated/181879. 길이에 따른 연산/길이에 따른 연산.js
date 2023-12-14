function solution(num_list) {
    let result1 = 0;
    let result2 = 1;
    
    if(num_list.length >= 11){
        for(let i = 0; i < num_list.length; i++){
           result1 += num_list[i];
        }
    }else{
        for(let i = 0; i < num_list.length; i++){
            result2 *= num_list[i];
        }
        return result2;
    }  
    return result1;
}