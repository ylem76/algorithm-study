/*
 * 평범하게 for문 돌려서 직접 계산
 * 당연하게도 시간초과 뜬다
 */


function strangeCounter(t) {
	let num = 3;
	let count = 0;

	for (let i = 1; i <= t; i++) {
		if (num === 0) {
			count++;
			num = 3 * Math.pow(2, count);
		}
		// console.log(num, i, count);
		if (i === t) {
			return num
		}
		num--;
	}
}