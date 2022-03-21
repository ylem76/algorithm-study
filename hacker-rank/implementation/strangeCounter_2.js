/*
	일반 카운터 시작 시간 : 1, 4, 10, 22, 46
	이상한 카운터 시작 시간 : 3 6 12 24
	일반 = 이상 동일 시간 : 2 5 11 23

	일반 카운터와 동일한 숫자를 잡아서 풀어보려고 했었는데,
	카운터 시작시간을 어떻게 도출해야할 지 몰라서 못 풀었었다

	해답 찾아서 해결
*/


function strangeCounter(t) {
	let phase = 3;
	while (2 * phase - 2 <= t) {
		console.log(2 * phase - 2);
		phase = phase * 2;
		console.log(phase);
	}
	console.log(`${phase}-(${t}-(${phase}-2))=${phase-(t-(phase-2))}`);
	console.log('-----');
	return phase - (t - (phase - 2));
}