function solution(people, limit) {
    
    const sorted = people.sort((a,b) => a-b);
    
    let boat = 0;
    
    let sPointer = 0;
    let ePointer = people.length - 1;
    
    while(sPointer <= ePointer) {
        if(sorted[sPointer] + sorted[ePointer] <= limit) {
            sPointer ++;
        } 
        boat ++;
        ePointer --;
    }
    return boat
}