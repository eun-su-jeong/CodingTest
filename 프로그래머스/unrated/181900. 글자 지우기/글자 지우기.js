function solution(my_string, indices) {
    let arr = my_string.split('');
    
    indices.sort((a,b) => b - a);
    
    indices.forEach(idx =>{
        arr.splice(idx , 1);
    });         
    
    return arr.join('');
}
 
