function solution(a, b) {
    // a~b까지 속한 모든 정수의 합 
    // a~b 이걸 어떻게 구하지? for문을 쓴다고.....?
    // a <= ? <=b
    let sum = 0;
    if(a < b){
        for(let i = a; i <= b; i++){
            sum += i;
        }
    }else{
        for(let i = b; i <= a; i++){
            sum += i;
        }
    }
    return sum;
}