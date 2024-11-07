function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    
    for(let key of keyinput){
        if(key === 'up') y += 1;
        if(key === 'down') y -= 1;
        if(key === 'left') x -= 1;
        if(key === 'right')x += 1;
        
        if(x > xLimit) x = xLimit;
        if(x < -xLimit) x = -xLimit;
        if(y > yLimit) y = yLimit;
        if(y < -yLimit) y = -yLimit;
    }
    return [x , y];
}