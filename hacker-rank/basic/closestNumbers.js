/**
 * 배열 정렬 -> 차이 값을 diffNum에 저장 -> for루프 돌면서
 * 차이가 작을 경우 diffNum 업데이트 + diffArr push
 * 차이가 동일할 경우 diffArr push
 * diffArr 리턴
 * 
 * const로 선언한 배열 초기화 : diffArr.length = 0;
 * 자바스크립트 정렬 함수 : arr.sort((a, b) => {return a - b;})
 */
function closestNumbers(arr) {
	const sortedArr = arr.sort((a, b) => {
		return a - b;
	});

	let difference = Math.abs(sortedArr[1] - sortedArr[0]);
	const diffArr = [sortedArr[0], sortedArr[1]];

	for (let i = 2; i < sortedArr.length; i++) {
		const diffNum = Math.abs(sortedArr[i] - sortedArr[i - 1])
		if (difference > diffNum) {
			difference = diffNum;
			diffArr.length = 0;
		}

		if (difference >= diffNum) {
			diffArr.push(sortedArr[i - 1], sortedArr[i]);
		}
	}
	console.log(diffArr);
	return diffArr
}