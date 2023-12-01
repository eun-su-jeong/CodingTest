function solution(angle) {
    let type = 0;
    if(0 < angle && angle < 90){
        type = 1;
    }else if(angle == 90){
        type = 2;
    }else if(90 < angle && angle < 180){
        type = 3;
    }else if(angle == 180){
        type = 4;
    }
    return type;
}
