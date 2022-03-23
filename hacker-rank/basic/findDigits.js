/*
  예전에 비슷한 문제에 시간제한으로 계속 틀렸던 게 생각이 나서 걱정했는데, 쉽게 풀렸네.
  숫자를 str로 변환하고 split 이용해서 배열로 변경
  배열함수 이용해 각 자릿수 숫자와 원래 숫자 비교
*/
function findDigits(n) {
	const digit = n
		.toString()
		.split('')
		.map((item) => parseInt(item));

	let count = 0;
	digit.forEach((item) => {
		if (item === 0) {
			return;
		}
		if (n % item === 0) {
			count++;
		}
	});
	return count;
}
