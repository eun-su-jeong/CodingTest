class Solution {
    public int solution(int[] num_list) {
        int answer = 1;
        int result = 0;
        for (int number : num_list) {
            result += number;
            answer *= number;
        }
        return result*result > answer ? 1 : 0;
    }
}


