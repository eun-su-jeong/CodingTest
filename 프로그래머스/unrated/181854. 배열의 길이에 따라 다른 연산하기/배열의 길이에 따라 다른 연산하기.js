function solution(arr, n) {
    let answer = [];
    
    // 홀수라면(길이)
    if(arr.length % 2 == 1){
      for (let i = 0; i < arr.length; i++) {
          // 인덱스 짝수
          if(i % 2 == 0){
            answer.push(arr[i] + n);
          }else{
            answer.push(arr[i]);
          }
        }
    }else{
      for (let i = 0; i < arr.length; i++){
          if(i % 2 == 1){
            answer.push(arr[i] + n);
          }else{
            answer.push(arr[i]); 
          }
      }  
    }
    return answer;

}