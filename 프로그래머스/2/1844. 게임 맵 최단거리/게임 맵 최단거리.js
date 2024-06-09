function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    
    while(queue.length > 0){
        const [x, y, cnt] = queue.shift();
        if(x == n - 1 && y == m - 1){
            return cnt;
        }
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny] && maps[nx][ny]== 1){
                queue.push([nx, ny, cnt + 1]);
                visited[nx][ny] = true;
                
            }
        }
    }
    
    return -1;
}

// **문제 이해**
// 최솟값 BFS => visited , queue : shfit  or stack : pop 
// 캐릭터가 갈 수 있는 길 
// => 동서남북 1칸씩, 벽 X == 0, 길o == 1, 맵에서 벗어난 길x, 방문했던 곳 x, 상대팀 진영에 도착 할 수 x == -1
// maps n * m 이차원 배열

// ** 셋팅 값 **
// map의 x, y 길이값을 n, m 이라고 
// visited 초기화 => 이건 어려워서 그냥 외워야 할 듯 
// queue [위치좌표x, 위치좌표y, count]
// x, y 각각 동서남북 위치
