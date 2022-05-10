/**
 * substring이라고 해서 어려웠는데,
 * 애초에 1글자도 substring으로 취급해서
 * 단순하게 중복 문자들은 모두 비용 없이 추가할 수 있다
 * 따라서 문자열의 중복을 제거하고 그 길이를 반환
 */
function stringConstruction(s) {
	const arr = Array.from(new Set(s));
	return arr.length;
}