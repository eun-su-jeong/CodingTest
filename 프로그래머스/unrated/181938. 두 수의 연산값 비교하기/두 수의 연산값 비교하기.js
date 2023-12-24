function solution(a, b) {
 const plus = Number(String(a) + String(b));
 const mul =  Number(2 * a * b);
 if(plus === mul){
     return plus;
 }else if(plus > mul){
     return plus;
 }else{
     return mul;
 }
}