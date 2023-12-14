function solution(my_string, n) {
    const length = my_string.length;
    return my_string.substring(length - n, length);
}