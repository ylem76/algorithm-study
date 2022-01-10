/*
결과가 n이 넘는 경우와 0이 되는 경우를 나눠서 생각했어야했는데,
n이 넘는 것만 생각해서 안 풀렸던 것.
값이 0이 되는 경우를 떠올리지 못해서 한참 걸렸다.
ex_ 5 5 1
*/

function saveThePrisoner(n, m, s) {
	const candy = m % n;
	// const result = candy + s -1 > n ? (candy + s -1) %n : candy + s -1;

	let result = candy + s - 1;

	if (result > n) {
		result = result % n;
	} else if (result === 0) {
		result = n;
	}

	return result;
}
