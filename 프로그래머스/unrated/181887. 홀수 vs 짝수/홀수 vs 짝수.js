function solution(num_list) {
    let resultOdd = 0;
    let resultEven = 0;
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 1){
            resultOdd += num_list[i];
        }else if(i % 2 === 0){
            resultEven += num_list[i];
        }
    }
    return resultOdd >= resultEven ? resultOdd : resultEven;
}