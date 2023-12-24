function solution(strList, ex) {
    let answer = "";
    for (let i = 0; i < strList.length; i++) {
        if (!strList[i].includes(ex)) {
            answer += strList[i];
        }
    }
    return answer;
}