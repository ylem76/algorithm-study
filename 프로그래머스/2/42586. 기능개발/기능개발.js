function solution(progresses, speeds) {
    var answer = [];
    
    
    while(progresses.length > 0) {
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i]
        }
        if(progresses[0] >=100) {
            let deployed = 0;
            for(let i=0; i<progresses.length; i++) {
                if(progresses[i] >= 100) {
                    deployed ++;
                } else {
                    break;
                }
            }
            console.log(progresses)
            progresses.splice(0, deployed)
            speeds.splice(0, deployed)
            answer.push(deployed)
        }
    }
    
    return answer;
}