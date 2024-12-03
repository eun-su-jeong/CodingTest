const fs = require('fs');

// input.txt 파일에서 입력값을 읽음
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 N과 M 추출
const [N, M] = input[0].split(' ').map(Number);

// 두 번째 줄에서 카드 배열 추출
const cards = input[1].split(' ').map(Number);

//카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임
//N장의 카드
//숫자 M
//N장의 카드 중에서 3장의 카드를 골라야 한다
//합

let maxSum = 0;
for (let i = 0; i < cards.length; i++){
    // console.log(cards[i]);
    for (let j = i + 1; j < cards.length; j++){
        // console.log(cards[i],cards[j]);
        for(let k = j + 1; k < cards.length; k++){
            // console.log(cards[i],cards[j],cards[k]);
            let sum = cards[i] + cards[j] + cards[k];
            if(sum <= M){
                maxSum = Math.max(maxSum, sum);
            }
        }
    }
}
console.log(maxSum);