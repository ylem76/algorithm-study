/**
 * 대부분 이런 로직으로 풀었던데 왜 때문에 시간 초과가 뜨는지...
 * 합 구하는 파트를 reduce 함수에서 for 반복문으로 변경 -> 통과
 * reduce가 내 생각보다 느린가보다
 */
function balancedSums(arr) {
	//let rightSum = arr.reduce((a,b) => a+b);
	
	let rightSum = 0;
    for(let i=0; i<arr.length; i++) {
        rightSum += arr[i]
	}
	
	let leftSum = 0;
	
	for(let i=0; i<arr.length; i++) {
			rightSum = rightSum - arr[i];
			leftSum = leftSum + (arr[i-1] !== undefined ? arr[i-1]:0);
			console.log(leftSum, rightSum)
			if(rightSum === leftSum) return 'YES'
	}
	return 'NO'
}