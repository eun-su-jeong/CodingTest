function solution(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    }

    arr1.forEach(num => {
        sumArr1 += num;
    });

    arr2.forEach(num => {
        sumArr2 += num;
    });

    if (sumArr1 > sumArr2) {
        return 1;
    } else if (sumArr1 < sumArr2) {
        return -1;
    }

    return 0;
}
