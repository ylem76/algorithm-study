/*
알파벳 배열 하나 만들고
문자열 소문자로 변환 -> for loop 돌면서 체크
*/
function pangrams(s) {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	const lowerS = s.toLowerCase();
	for (let i = 0; i < alphabet.length; i++) {
		if (lowerS.indexOf(alphabet[i]) < 0) {
			return 'not pangram';
		}
	}
	return 'pangram';
}
