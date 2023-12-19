class Solution {
    public int[] solution(int[] num_list) {
        int last = num_list[num_list.length -1];
        int last2 = num_list[num_list.length -2];
        int[] result = new int[num_list.length + 1];
        
        for(int i=0; i< num_list.length; i++){
            result[i] = num_list[i];
        }
        if(last > last2){
           result[result.length -1] = last - last2;
        }else{
           result[result.length -1] = last * 2;
        }
        return result;
    }
}