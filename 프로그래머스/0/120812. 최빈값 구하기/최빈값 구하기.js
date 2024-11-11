function solution(arr) {
    const frequencyMap = new Map();

    // 각 숫자의 빈도 계산
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let maxFrequency = 0; // 최대 빈도를 저장할 변수
    let mode = -1;        // 최빈값을 저장할 변수
    let multipleModes = false; // 최빈값이 여러 개인지 여부를 저장할 변수

    // 최빈값 찾기
    for (const [num, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = num;
            multipleModes = false; // 새로운 최빈값이 나오면 중복 초기화
        } else if (frequency === maxFrequency) {
            multipleModes = true; // 같은 빈도의 다른 값이 있으면 표시
        }
    }

    return multipleModes ? -1 : mode;
}
