function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.map(function(str,idx){        
        let num = parseInt(str.substring(s, s + l));
        if(num > k){
            answer.push(num); 
        }
    }); 
    return answer;
}
