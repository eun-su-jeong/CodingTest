function solution(myString) {
    return myString.replace(/[A-Z]/gi, match => (match.toLowerCase()).replace(/a/g, 'A'));
}