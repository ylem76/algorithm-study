/**
 * 한글자라도 같은 게 있으면 YES 반환하니까
 * 동일 글자가 있는지 체크
 */

function twoStrings(s1, s2) {
	// Write your code here
	const arr1 = Array.from(new Set(s1));
	const arr2 = Array.from(new Set(s2));
	console.log(arr1, arr2);
	
	let result = 'NO'
	arr1.forEach(item => {
			if(arr2.indexOf(item) > -1) {
					result = 'YES'
			}
	});
	
	return result
}