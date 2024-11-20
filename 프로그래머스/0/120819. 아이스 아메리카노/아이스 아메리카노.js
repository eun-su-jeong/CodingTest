function solution(money) {
    const iceAmericano = 5500;
    let number = Math.floor(money / iceAmericano);
    let change = (money % iceAmericano);
    return [number, change];
}