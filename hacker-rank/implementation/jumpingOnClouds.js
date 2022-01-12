/*
문제 조건에 n%k=0이랬는데, 테스트 케이스는 그렇지 않아서 헷갈렸다
최소공배수와 최대공약수를 구해 반복구문 횟수를 구하고
% 연산으로 인덱스 값을 찾아낸다.
조건에 따라서 남은 에너지를 구하고 리턴
*/
function jumpingOnClouds(c, k, n) {
	function getAttempt(a, b) {
		if (b == 0) return a;
		else return getAttempt(b, a % b);
	}
	const attempt = (n * k) / getAttempt(n, k);
	console.log(attempt);
	let energy = 100;

	for (let i = 0; i < attempt; i = i + k) {
		if (c[(i + k) % n] == 1) {
			energy = energy - 3;
			console.log('thunder cloud : ', energy);
		} else {
			energy = energy - 1;
			console.log('cloud : ', energy);
		}
	}
	return energy;
}
