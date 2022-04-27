/**
 * arr의 length는 무조건 홀수라고 문제에서 정했으므로
 * 따로 분기처리 하지 않고 다음과 같이 작성함
 */
function findMedian(arr) {
	const sortedArr = arr.sort((a, b) => a - b);
	const midIdx = Math.floor(sortedArr.length/2)
	return sortedArr[midIdx]
}