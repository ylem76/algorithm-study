/*
처음에 idx간의 값을 비교하려 했는데,
그렇게 하지 않고
조건에 맞는 값이 배열에 있는지 확인했다

필요한 건 조건에 맞는 경우의 수만 구하면 되긴 한데,
실제 결과 배열을 눈으로 확인하고 싶어진다
*/

function beautifulTriplets(d, arr) {
	let count = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		const idx1 = arr.indexOf(arr[i] + d);
		const idx2 = arr.indexOf(arr[i] + d + d);

		if (idx1 !== -1 && idx2 !== -1) {
			// const resultArr = [arr[i], arr[idx1], arr[idx2]];
			// console.log(resultArr);
			count++;
		}
	}
	return count;
}
