/*

정규식 사용할 때
[] 괄호 잊으면 제대로 동작 안함 주의
문자 이스케이핑 주의

match하는 값이 없을 때에는 null 리턴함
-> || 연산자를 이용해 빈 배열을 리턴할 수 있게

*/
function minimumNumber(n, password) {
	const numbers = /[0123456789]/g;
	const lower_case = /[abcdefghijklmnopqrstuvwxyz]/g;
	const upper_case = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g;
	const special_characters = /[!@#$%^&*()\-+]/g;
	
	let count = 0;
	
	const checkMinimunChar = (regEx) => {
			const matchChar = password.match(regEx) || [];
			if(matchChar.length < 1) {
					count ++;
					console.log('add'+ regEx)
			}
	}
	
	checkMinimunChar(numbers);
	checkMinimunChar(lower_case);
	checkMinimunChar(upper_case);
	checkMinimunChar(special_characters);
	
	if(n+count < 6) {
			count = 6-n;
	}
	
	return count
}