/**
 * count 0부터 시작X, 1부터 시작
 */
function toys(w) {
    const sorted = w.sort((a,b)=> a-b)
    // console.log(sorted)
    
    let firstItem = sorted[0];
    let count = 1;
    
    sorted.forEach(item => {
        if(item > firstItem+4) {
            count ++;
            firstItem = item
            //console.log(count, firstItem, firstItem+4)
        }
    });
    //console.log(count)
    return count;

}