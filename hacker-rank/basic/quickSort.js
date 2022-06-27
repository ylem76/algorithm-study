/**
 * 퀵 정렬 기본 원리
 */
function quickSort(arr) {
    const equal = arr[0];
    const left = [];
    const right = [];
    
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > equal ){
            right.push(arr[i]);
        } else if(arr[i] < equal) {
            left.push(arr[i]);
        }
    }
    const result = [
        ...left,
        equal,
        ...right
    ]
    return result
}