/*
중복으로 체크 안해도 됨 0101010이면
010 1 010 -> O
01 010 10 -> X
따라서 010개수만 체크해주면 됨

for문으로 b[i], b[i+1], b[i+2] 체크하는 방법도 있는데,
정규식이 더 간단하더라
*/

function beautifulBinaryString(b) {
	const regEx = /010/g;
	const matchChar = b.match(regEx) || [];
	return matchChar.length;
}