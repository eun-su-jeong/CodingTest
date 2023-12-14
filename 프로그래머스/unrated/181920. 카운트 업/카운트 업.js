function solution(start_num, end_num) {
     answer = [end_num-start_num+1];
        for(let i = 0; i < end_num-start_num+1; i++){
            answer[i] = start_num + i;
        }
        return answer;
}