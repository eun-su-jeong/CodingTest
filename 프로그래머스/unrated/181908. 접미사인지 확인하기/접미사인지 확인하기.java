class Solution {
    public int solution(String my_string, String is_suffix) {
        String str = my_string.substring(0, my_string.length());
        String sub = "";
        for(int i = 0; i < str.length(); i++){
           sub = str.substring(i);
           
            if(is_suffix.equals(sub)){
                return 1;
            }
        }   
        
        return 0;
    }
}