/**
 * 정렬 후 더하고 판별
 */
function twoArrays(k, A, B) {
    const arrA = A.sort((a,b) => a-b);
    const arrB = B.sort((a,b) => b-a);
    
    const sumArr = arrA.map((item, idx) => {return item + arrB[idx]});
    let result = 'YES'
    sumArr.forEach(item => {
        console.log(item);
        if(item < k) {
            console.log('NO')
            result='NO';
            return
        }
    });
    return result
}