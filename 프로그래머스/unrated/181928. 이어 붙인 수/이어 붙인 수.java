class Solution {
    public int solution(int[] num_list) {
        StringBuilder answer1 = new StringBuilder();
        StringBuilder answer2 = new StringBuilder();
        
        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 == 1){
                answer1.append(num_list[i]);          
            }else{
                answer2.append(num_list[i]);
            }
        }
        return Integer.parseInt(answer1.toString()) + Integer.parseInt(answer2.toString());
    }
}