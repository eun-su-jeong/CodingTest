function solution(phone_number) {
    const number = Array.from(phone_number);
    
    for(let i = 0; i < number.length - 4; i++){
        number[i] = '*';
    }
    return number.join('');
}