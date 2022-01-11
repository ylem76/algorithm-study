/*
  인덱스를 값으로 검색해서 찾는 문제
  배열의 인덱스는 0부터 시작하지만,
  문제에서는 1부터 시작하므로 +1을 해주자.
*/
function permutationEquation(p) {
	const newArr = p.map((item, idx) => {
		const number = p.indexOf(idx + 1) + 1;
		return p.indexOf(number) + 1;
	});

	return newArr;
}
