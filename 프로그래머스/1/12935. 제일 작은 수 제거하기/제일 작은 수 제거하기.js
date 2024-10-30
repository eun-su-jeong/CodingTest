function solution(arr) {
    // 배열중에 가장 작은 수 찾기 
    let answer = [];
    // 최소값 찾기
    let minNum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    
    // // 최소값이 아닌 값들을 answer 리스트에 담기
    // for(let j = 0; j < arr.length; j++){
    //     if (arr[j] != minNum) {
    //         answer.push(arr[j]);    
    //     }
    // }
    
    answer = arr.filter(num => num !== minNum);

    // 아무것도 안 담겼을 때
    if(answer.length == 0) {
        answer.push(-1);
    }
    
    return answer; 
}