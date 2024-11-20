function solution(price) {
    let discount = 0;
    if(price >= 500000){
        discount = price * 0.8;
    }else if(price >= 300000){
        discount = price * 0.9;
    }else if(price >= 100000){
        discount = price * 0.95;
    }else{
        discount = price;
    }
 
    return Math.floor(discount);
}
