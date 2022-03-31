/*

ascii 코드로 변환하여
대문자인지 소문자인지 판별
'A' : 65
'a' : 97

*/
function camelcase(s) {
	let count = 1;
	
	for(let i=0; i<s.length; i++) {
			if(s.charCodeAt(i) < 97 ) {
					count ++;
			}
	}
	return count
}