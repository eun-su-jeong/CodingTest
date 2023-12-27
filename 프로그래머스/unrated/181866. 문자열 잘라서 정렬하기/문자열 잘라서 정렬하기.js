function solution(myString) {
    const answer = myString.split("x");
    const filterArray = answer.filter(str => str != "");
    const result = filterArray.sort();
    return result;
}