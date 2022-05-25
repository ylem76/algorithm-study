/**
 * n값을 보고 미리 걸러내는 작업이 없어서 시간초과가 떴던 것 같다
 * 이중 루프 break 할 때 for문 라벨링을 하면 좋다
 */
function decentNumber(n) {
	let answer = '';

	// n check
	if (n < 3) {
		console.log('-1')
		return;
	}
	if (n % 3 === 0) {
		for (let i = 0; i < n; i++) {
			answer += '5';
		}
		console.log(answer);
		return;
	}

	// get a : 3으로 나뉘고 n보다 큰 값
	let a = 3;
	while (n - a > 0) {
		a += 3;
	}

	//console.log(a);

	// 다른 로직은 그대로
	const count = [];
	loop1:
		for (let i = a; i >= 0; i -= 3) {
			for (let j = 0; j <= n; j += 5) {
				if ((i + j) === n) {
					count.push(i);
					count.push(j);
					//console.log(i,j)
					break loop1;
				}

			}
		}

	// console.log(count);


	for (let i = 0; i < count[0]; i++) {
		answer += '5';
	}
	for (let i = 0; i < count[1]; i++) {
		answer += '3';
	}
	answer = !answer ? -1 : answer;
	console.log(answer);
}