/*
인덱스 번호 가지고 for루프 돌려도 됐을 거 같긴 한데,
시간초과 나올 것 같아서 간단하게 정규식으로 풀이
r이 2번 나오니까 2번 써줬어야했는데, 놓쳐서 오답 확인했지 뭔가
*/
function hackerrankInString(s) {
	const regEx = /h\w*a\w*c\w*k\w*e\w*r\w*r\w*a\w*n\w*k/g;
	const checkString = (regEx) => {
			const matchChar = s.match(regEx) || [];
			if(matchChar.length < 1) {
					return 'NO';
			} else {
					return 'YES';
			}
	}
	return checkString(regEx);
}