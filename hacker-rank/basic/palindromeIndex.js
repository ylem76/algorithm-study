/**
 * 답은 찾을 수 있는데, 시간초과
 * 아이디어가 안 떠오름
 */
function palindromeIndex(s) {
	const isPalidromes = (s)=> {
			const stringArr = Array.from(s);
			const arrLength = Math.floor(stringArr.length/2);
			const leftHalf = stringArr.slice(0,arrLength).join();
			const rightHalf = stringArr.slice(-arrLength).reverse().join();
			
			if(leftHalf === rightHalf) {
					return true;
			}
			return false;
	}
	
	if(isPalidromes(s) === true) {
			return -1
	}
	
	for(let i=0; i<=s.length; i++) {
			const removedStr = s.substring(0, i) + s.substring(i+1, s.length);
			if(isPalidromes(removedStr) === true) {
					return i
			}
			
	}
}