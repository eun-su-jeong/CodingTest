class Solution {
    public int solution(int n, int k) {
        int lamb = n * 12000;
        int beverage = k * 2000;
        int discount = (n/10) * 2000;
        return lamb + beverage - discount;
    }
}