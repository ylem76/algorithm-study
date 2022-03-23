/*
1차 : 간단하게 sort 함수 썼음
그러나 큰 수가 섞여 있을 때 제대로 동작 X
 */

function bigSorting(unsorted) {
	// Write your code here

	const sorted = unsorted.sort((a, b) => a - b);
	return sorted;

}

/*
BigInt()를 써야하나 어떻게 해야하나 난리 치다가 해답 확인했다
number로 변환하지 않고 바로 비교하는데,
글자수가 같으면 그 때 a와 b의 차를 비교해서 순서를 정한다
왜 string에서 number나 bigInt로 안바꿨는데 대소 비교가 되지..?
이 부분은 잘 모르겠다
*/

function bigSorting(unsorted) {
	// Write your code here
	unsorted.sort((a, b) => {
			if (a.length === b.length) {
					return a > b ? 1 : -1;
			}
			return a.length - b.length;
	});
	console.log(unsorted);
	return unsorted;
}
