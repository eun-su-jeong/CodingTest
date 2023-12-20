import java.util.Arrays;

class Solution {
    public int[] solution(int n, int k) {
        int[] answer = new int[n];
        int count = 0;
        
        for(int i = 0; i < n; i++){
            int num = i + 1;
             if (num % k == 0) { 
                answer[count] = num;
                count++;
            }
        }
        answer = Arrays.copyOf(answer, count);
        
        return answer;
    }
}