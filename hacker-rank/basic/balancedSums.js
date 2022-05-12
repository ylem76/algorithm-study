/**
 * 시간 초과
 * 하나하나 인덱스별로 합계를 구하는 게 문제인 것 같기는 하다
 * 좌우 하나씩 계산하는 방법 찾아야할 듯
 */
function balancedSums(arr) {
    if(arr.length === 1 ){
        return 'YES';
    }
    
    const firstIdxRemoved = arr.filter((item, idx) => {
        if(idx===0) {return false} else {return true}
    })
    console.log(firstIdxRemoved);
    
    const firstSum = firstIdxRemoved.reduce((a,b)=> a+b);
    if(firstSum === 0) return 'YES'
    
    
    const lastIdxRemoved = arr.filter((item, idx) => {
        if(idx===arr.length) {return false} else {return true}
    })
    const lastSum = lastIdxRemoved.reduce((a,b)=> a+b);
    if(lastSum === 0) return 'YES'
    
    
    
    for(let i=1; i<arr.length-1; i++) {        
        const leftArr=arr.slice(0, i);
        const rightArr = arr.slice(i+1);
        const leftSum =leftArr.reduce((a,b) => a+b);
        const rightSum =rightArr.reduce((a,b) => a+b);
        
        if(leftSum === rightSum) {
            return 'YES'
        }
    }
    
    return 'NO'
}