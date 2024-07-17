function solution(n) {
    if(n===0) {return 0}
    if(n===1) {return 1}
    let count = 1;
    
    
    for(let i=Math.ceil(n/2); i>0; i--) {
        let currentNumber = 0;
        for(let j=i; j>0; j--) {
            currentNumber += j
            if(currentNumber === n) {
                count++;
                break;
            }
            if(currentNumber > n) {
                break;
            }
        }
    }
    
    return count;
}