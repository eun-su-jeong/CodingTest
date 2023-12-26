function solution(myString, pat) {
    let result = myString.split('').map(char => (char === 'A' ? 'B' : char === 'B' ? 'A' : char)).join('');
    console.log(result);
    return result.includes(pat) ? 1 : 0;
}

