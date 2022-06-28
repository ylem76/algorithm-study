/*
* 문제 조건 잘 읽자
*/

function countingSort(arr) {
    const frequency = [];    
    for(let i=0; i<100; i++) {
        frequency.push(0);
    }
    
    for(let i=0; i<arr.length; i++) {
        const idx = arr[i];
        frequency[idx] ++;
    }
    
    return frequency
}