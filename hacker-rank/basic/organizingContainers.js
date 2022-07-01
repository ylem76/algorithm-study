/**
 * 가로축 컨테이너 사이즈
 * 세로축 볼 사이즈 더한 후 수가 맞으면 가능 안맞으면 불가능
 */
function organizingContainers(container) {
    const ballSize = [];
    const containerSize = [];
    
    for(let i=0; i<container.length; i++){
        containerSize.push(container[i].reduce((a, b) => a+b));
    }
    
    
    let sum = 0;
    for(let i=0; i<container.length; i++){
        sum = 0;
        for(let j=0; j<container[0].length; j++) {
            sum+=container[j][i]
        }
        ballSize.push(sum)
    }
    
    containerSize.sort();
    ballSize.sort();
    console.log(containerSize)
    console.log(ballSize)
    
    let result = 'Possible'
    for(let i=0; i<containerSize.length; i++){
        if(containerSize[i] === ballSize[i]) {
            
        } else {
            result = 'Impossible'
        }
    }
    return result
}
