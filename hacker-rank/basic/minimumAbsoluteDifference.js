/**
 * 문제 예시에서 다양한 조합을 다 고려하라고 나오긴 했지만
 * 결국 가장 적은 절대값을 구하려면 작은 수들끼리, 큰수끼리 연산해야함
 * 따라서 먼저 정렬을 해주고 그 다음에 변수에 넣어둔 최소 절대값이랑 비교
 */

function minimumAbsoluteDifference(arr) {
    const sortedArr = arr.sort((a,b) =>a-b);    
    let absoluteNum = Math.abs(sortedArr[1] - sortedArr[0]);
    for(let i=2; i<sortedArr.length; i++) {
        const tempAbs = Math.abs(sortedArr[i] - sortedArr[i-1]);
        if (absoluteNum > tempAbs) {
            absoluteNum = tempAbs;
        }
    }
    
    return absoluteNum
}
