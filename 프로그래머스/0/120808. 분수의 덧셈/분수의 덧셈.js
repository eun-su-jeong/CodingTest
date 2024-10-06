function solution(numer1, denom1, numer2, denom2) {
    //유클리드 호재법?
    //최대공약수를 찾아서 
    //최소공배수 두 수 곱한값 A*B/G(최대공약수)
    
    let num1 = denom1 * denom2 // 분모
    let num2 = numer1 * denom2 + numer2 * denom1 // 분자
    
    // 최대 공약수 구하기
    function gcd(a, b){
        if(b === 0){
            return a;
        }
        return gcd(b, a % b);
    }
    
    const g = gcd(num1, num2);
    num1 = num1 / g;
    num2 = num2 / g;
    
//     let list = [];
//     list.push(num2);
//     list.push(num1);
    
//     return list;
    return [num2, num1];
}