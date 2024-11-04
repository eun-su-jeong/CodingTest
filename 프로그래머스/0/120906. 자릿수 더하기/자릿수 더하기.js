function solution(n) {
  return String(n).split('').reduce((sum,num) => sum + Number(num),0);
}