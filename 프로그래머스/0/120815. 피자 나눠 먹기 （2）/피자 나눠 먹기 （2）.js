function solution(n) {
  let pizzaCount = 1;
    
    while((pizzaCount * 6) % n !== 0) {
        pizzaCount++;
    }
    return pizzaCount;
}