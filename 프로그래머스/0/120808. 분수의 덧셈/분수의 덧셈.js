function solution(numer1, denom1, numer2, denom2)
{
    let num1 = denom1 * denom2;
    let num2 = numer1 * denom2 + numer2 * denom1
    
    function gcd(a, b){
        if(b === 0){
            return a;
        }
        return gcd(b, a % b);
    }
    
    const g = gcd(num1, num2);
    
    num1 = num1 / g;
    num2 = num2 / g;
    
    return [num2, num1];
    
}