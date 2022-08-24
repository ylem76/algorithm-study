/*
end 조건이랑 체크해야하는 index 번호랑 분리
checkSupply에서 startIdx를 포함하지 않는데, arr[0]이 1인 경우 보완
*/

function pylons(k, arr) {
    
    let supplyIdx = -1;
    let nextIdx = k-1;
    
    const supplyArr = [];
    let supplyEnd = false;
    
    const checkSupply = (nextIdx, startIdx)=>{
        let idx = -1;
        for (let i = nextIdx; i > startIdx; i--) {
            //console.log('i : ', arr[i], arr[i] === '1')
            if(arr[i] === 1) {
                idx = i
                break;
            }
        }
        //console.log(idx)
        if(idx === -1) {return -1} else {return idx}
    }
    
    do{
        nextIdx = nextIdx > arr.length -1 ? arr.length -1 : nextIdx;
        //console.log(nextIdx, supplyIdx);
        supplyIdx = checkSupply(nextIdx, supplyIdx);
        if(supplyIdx === -1) {return -1}
        if(supplyIdx + k >= arr.length) {
            supplyEnd = true;
        }
        supplyArr.push(supplyIdx);
        nextIdx = supplyIdx + 2*k-1;
        //console.log(nextIdx)
    } while(supplyEnd === false)
    
    console.log(supplyArr.length);
        
    return supplyArr.length;
}