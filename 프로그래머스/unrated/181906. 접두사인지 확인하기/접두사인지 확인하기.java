class Solution {
    public int solution(String my_string, String is_prefix) {
        String sub = "";
        int result = 0;
        for(int i=1; i < my_string.length(); i++){
            sub = my_string.substring(0, i);
            System.out.println(sub);
            
            if(is_prefix.equals(sub)){
                 result = 1;
            }
        }
        return result;
    }
}