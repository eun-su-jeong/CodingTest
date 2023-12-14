class Solution {
    public int solution(int[] num_list) {
        int result = 0;
        int result2 = 1;
        if(num_list.length >= 11){
            for(int i = 0; i < num_list.length; i++){
                result += num_list[i];               
            }
        }else if(num_list.length <= 10){
            for(int i = 0; i < num_list.length; i++){
                result2 *= num_list[i];
                 System.out.print(result2);
            }
            return result2;
        }
        
        return result;
    }
}