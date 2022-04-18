/**
 * https://www.youtube.com/watch?v=q9d7MZpuWSE
 * 숫자로 보지 말고 문자열로 봤어야 했다
 * 시작 숫자 도출 -> 숫자 변환 -> 시작 숫자 +1 -> 다시 문자열 변환 -> 기존 문자열과 합침
 */
function separateNumbers(s) {
	let subString = '';
	let isValid = false;
	
	for(let i=1; i<=s.length/2; i++) {
			subString = s.substring(0,i);
			
			let validString = subString;
			let count = 1;
			while(validString.length < s.length) {
					// console.log(validString , (parseInt(subString) +count).toString())
					// console.log( validString + (parseInt(subString) +count).toString());
					validString = validString + (BigInt(subString) +BigInt(count)).toString();
					count ++;
			}
			if(s === validString) {
					isValid = true;
					break;
			}
	}
	console.log(isValid? 'YES '+ subString : 'NO');
}