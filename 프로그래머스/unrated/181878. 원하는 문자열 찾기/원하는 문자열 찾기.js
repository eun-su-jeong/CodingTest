function solution(myString, pat) {
    const string = myString.toLowerCase();
    const word = pat.toLowerCase();
    return string.includes(word) ? 1 : 0;
}