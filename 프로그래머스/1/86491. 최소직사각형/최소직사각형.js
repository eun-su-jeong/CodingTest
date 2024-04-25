function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    // 각 명함을 순회하면서 가로와 세로를 정렬
    for(let i = 0; i < sizes.length; i++){
        // 더 큰 수를 가로로 설정하기 위해 정렬
        let width = Math.max(sizes[i][0], sizes[i][1]);
        let height = Math.min(sizes[i][0], sizes[i][1]);
        
        // 가로와 세로의 최대값을 갱신
        if(width > maxWidth){
            maxWidth = width;
        }
        if(height > maxHeight){
            maxHeight = height;
        }
    }
    
    // 가로와 세로 최대값의 곱을 반환
    return maxWidth * maxHeight;
}