/**
 * 샘플 케이스가 정렬 되어 있어 방심했다
 * 먼저 정렬하는 거 잊지 말기
 */
function maximumPerimeterTriangle(sticks) {
    // Write your code here
    // console.log(sticks);
    const sorted = sticks.sort((a,b)=> a-b);
    const result = [-1];
    let resultPerimeter = result.reduce((a,b) => a+b);
    let resultMaxSide =Math.max(result);
    for(let i=0; i< sorted.length-2; i++) {
        if(sorted[i] + sorted[i+1] <= sorted[i+2]) {
            continue;
        }
        const tempArr = [sorted[i], sorted[i+1], sorted[i+2]];
        
        if(resultPerimeter > tempArr.reduce((a,b) => a+b)){continue;}
        if(resultMaxSide > Math.max(tempArr)){continue;}
        
        result.length = 0;
        result.push(sorted[i]);
        result.push(sorted[i+1]);
        result.push(sorted[i+2]);
    }
    console.log(result)
    return result;
}