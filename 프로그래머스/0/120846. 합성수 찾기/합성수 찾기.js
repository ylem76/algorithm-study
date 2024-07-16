function solution(n) {
    var answer = 0;
    
    let divisorCount = 0;
    
    for(let i=0; i<=n; i++) {
        divisorCount = 0;
        
        for(let j=0; j<=i; j++){
            if(i%j === 0) {
                
                divisorCount++
            }
        }
        if(divisorCount >=3) {
            answer ++;
        }
    }
    return answer;
}