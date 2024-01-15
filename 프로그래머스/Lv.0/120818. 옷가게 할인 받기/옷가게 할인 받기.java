class Solution {
    public int solution(int price) {
        double discountPrice = price;
        if(price >= 500000){
            discountPrice = price * 0.8;
        }else if(price >= 300000){
            discountPrice = price * 0.9;
        }else if(price >= 100000){
            discountPrice = price * 0.95;
        }
        return (int)discountPrice;
    }
}