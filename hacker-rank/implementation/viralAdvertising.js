/*
어렵게 풀지 않고 문제에 나와 있는 표 그대로 수식으로 옮김
*/
function viralAdvertising(n) {
	let shared = 5;
	let liked = Math.floor(5 / 2);
	let cumulative = liked;

	for (let i = 1; i < n; i++) {
		shared = liked * 3;
		liked = Math.floor(shared / 2);
		cumulative = cumulative + liked;
	}
	return cumulative;
}
