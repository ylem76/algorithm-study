/*
문제 오류가 있었다
width 값을 인자로 넘겨주지 않아서 main함수 수정
result.join()함수를 사용하지 못한다고 해서 에러가 났는데
마지막에 리턴하는 값을 배열로 넘겨주면 된다
*/

function serviceLane(n, width, cases) {
	// console.log(n, cases, width);

	const result = cases.map((caseItem, idx) => {
		const filtered = width.filter((item, idx) => {
			if (idx >= caseItem[0] && idx <= caseItem[1]) {
				return true;
			}
			return false;
		});
		const maxWidth = Math.min(...filtered);
		// console.log(maxWidth);
		return maxWidth;
	});

	return result;
}
