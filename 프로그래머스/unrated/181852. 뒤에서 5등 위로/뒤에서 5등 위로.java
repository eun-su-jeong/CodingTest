import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length - 5];
        int[] copiedArray = Arrays.copyOf(num_list, num_list.length);
        
        Arrays.sort(copiedArray);
        
        for(int i = 5; i < copiedArray.length; i++){
            answer[i - 5] = copiedArray[i];
        }
        
        return answer;
    }
}