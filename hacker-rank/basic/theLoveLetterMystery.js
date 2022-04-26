/**
 * palindromes = 수박이박수, 다시합창합시다
 * 왼쪽 오른쪽 나눠서 배열 만들고 문자열마다 차이를 계산
 * 좌우 나누는 걸 어떻게 하나 고민했는데,
 * slice로 나누는 게 제일 간단 (처음에는 filter로 나누려고 했었다)
 */
function theLoveLetterMystery(s) {
	const stringArr = Array.from(s);
	const arrLength = Math.floor(stringArr.length/2);
	
	const leftHalf = stringArr.slice(0,arrLength);
	const rightHalf = stringArr.slice(-arrLength).reverse();
	
	let count = 0;
	for(let i=0; i<leftHalf.length; i++) {
			count += Math.abs(leftHalf[i].charCodeAt(0) -rightHalf[i].charCodeAt(0))
	}    
	return count
}