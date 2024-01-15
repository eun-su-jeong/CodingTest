import java.util.ArrayList;

class Solution {
    public String[] solution(String myStr) {
        String[] answer;
        ArrayList<String> list = new ArrayList();
        answer = myStr.split("[abc]");
        for(int i = 0; i < answer.length; i++){
            if(!answer[i].equals("")){
               list.add(answer[i]);
            }
        }
        if(list.size() == 0){
            list.add("EMPTY");
        }
        String[] result = new String[list.size()];
        for(int i = 0; i < result.length; i++){
            result[i] = list.get(i);
        }
        return result;
    }
}