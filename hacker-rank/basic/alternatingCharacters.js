/**
 * 원래 아이디어는 filter 함수로 거르는 거였는데,
 * for문이 더 간단할 것 같아서
 * 연속된 문자열을 찾는 거라 앞 글자와 동일하면 count올라가게 체크
 */
function alternatingCharacters(s) {
	let count = 0;
	const strArr = s.split('');
	for (let i = 1; i < strArr.length; i++) {
		if (strArr[i] === strArr[i - 1]) {
			count++;
		}
	}

	/*
	const filteredArr = strArr.filter((item, idx) => {
		if (idx === 0) {
			return true;
		}

		if (item === strArr[idx - 1]) {
			count++;
			return false;
		}
	})
	*/

	return count
}