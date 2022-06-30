/**
 * 1에서 했던 것에 더해 다시 정렬된 배열을 리턴하는 문제
 */

function countingSort(arr) {
    const frequency = [];
    for(let i=0; i<100; i++) {
        frequency.push(0);
    }
    for(let i=0; i<arr.length; i++){
        const idx = arr[i];
        frequency[idx] ++;
    }
    const result = [];
    for(let i=0; i<frequency.length; i++) {
        for(let j=0; j<frequency[i]; j++){
            result.push(i);
        }
    }
    return result
}