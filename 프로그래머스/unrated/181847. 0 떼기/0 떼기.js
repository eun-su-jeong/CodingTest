// function solution(n_str) {
//     let answer = '';
//     for(let i = 0; i < n_str.length; i++){
//         if(!n_str[i] == '0'){
//             answer += n_str[i];
//         }
//     }
//     return answer;
// }

function solution(n_str) {
    return n_str.replace(/^0+/, '');
}