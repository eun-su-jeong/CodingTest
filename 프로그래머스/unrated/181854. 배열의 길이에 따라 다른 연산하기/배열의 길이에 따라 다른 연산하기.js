function solution(arr, n) {
    let answer = [];
    let result = [...answer];
    
    if(arr.length % 2 == 1){
      for (let i = 0; i < arr.length; i++) {
          value = i % 2 == 0 ? arr[i] + n : arr[i];
          result.push(value);
        }
    }else{
      for (let i = 0; i < arr.length; i++){
          value = i % 2 == 1 ? arr[i] + n : arr[i];
          result.push(value);
      }  
    }
    return result;

}