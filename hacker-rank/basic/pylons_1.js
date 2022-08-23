/*
내가 생각하지 못하는 경우가 있는 것 같은데 잘 모르겠음
뭐지..?
*/
function pylons(k, arr) {
    // console.log(k, arr)
    //console.log(arr.slice(895-2*k, 896));
    const startIdx = k-1;
    let supplyIdx = 0;
    let nextIdx = startIdx;
    const supplyArr = [];
    let supplyEnd = false;
    
    const checkSupply = (nextIdx, supplyIdx)=>{
        let idx = -1;
        for(let i=nextIdx; i>supplyIdx; i--) {
            if(arr[i] === 1) {
                idx = i
                break;
            }
        }
        if(idx === -1) {return -1} else {return idx}
    }
    
    do{
        nextIdx = nextIdx > arr.length -1 ? arr.length -1 : nextIdx;
        console.log(nextIdx, supplyIdx);
        supplyIdx = checkSupply(nextIdx, supplyIdx);
        if(supplyIdx === -1) {return -1}
        if(nextIdx >= arr.length - k) {
            supplyEnd = true;
        }
        
        supplyArr.push(supplyIdx);        
        nextIdx = supplyIdx + 2*k-1;
    } while(supplyEnd === false)
        
    return supplyArr.length;
}