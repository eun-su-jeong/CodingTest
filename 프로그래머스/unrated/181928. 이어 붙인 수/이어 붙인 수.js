function solution(num_list) {
    let answer1 = '';
    let answer2 = '';

    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 1){
            answer1 += num_list[i].toString();
        }else if(num_list[i] % 2 === 0){
            answer2 += num_list[i].toString();                        
        }   
    }
    return Number(answer1) + Number(answer2);
}