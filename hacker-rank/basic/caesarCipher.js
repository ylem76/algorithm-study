/*
직접 숫자계산하기 싫어서
배열로 다 만들어두고 바꾸려고 했는데, 대문자가 있었네

대소문자 구분을 아스키코드로 판별하고, 대문자는 소문자로 변환 후
인덱스 번호를 찾아서 그걸 다시 대문자로 변환하여 리턴했다

그리고 문제에 이미 쓰여있긴 하지만
이럴때 주어지는 k, 돌리는 횟수는 1바퀴를 넘을 수 있음 주의
*/

function caesarCipher(s, k) {
	const original = 'abcdefghijklmnopqrstuvwxyz';    
		
	const rotateCount = k%26;
	const rotated = original.slice(rotateCount)+original.slice(0,rotateCount)
	
	const newArr = s.split('').map((item) => {
			
			if(item.charCodeAt(0) >= 65 && item.charCodeAt(0)<=90) {
					// uppercase
					const origIdx = original.indexOf(item.toLowerCase());
					const newSting = rotated[origIdx];
					return newSting.toUpperCase()
			} else if(item.charCodeAt(0)>=97 && item.charCodeAt(0) <= 122) {
					// lower
					const origIdx = original.indexOf(item);
					const newSting = rotated[origIdx];
					return newSting
			}        
			return item
	});
	
	
	return newArr.join('');
	
}