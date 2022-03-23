/*
어떤 규칙을 찾을 수 있지 않을까 생각해봤지만 잘 안떠올랐다
숫자 조건이 1000 이하라고 하길래 시간제한은 걸리지 않을 것 같아서
그냥 실제로 연산을 수행했다
*/

function fairRations(B) {
	// console.log(B);
	let count = 0;
	for (let i = 0; i < B.length - 1; i++) {
		if (B[i] % 2 === 1) {
			B[i]++;
			B[i + 1]++;
			count = count + 2;
		}
	}
	// console.log(B);
	// console.log();
	if (B[B.length - 1] % 2 === 1) {
		return 'NO';
	}
	return count;
}
