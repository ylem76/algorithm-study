/**
 * arr 문자열 합친 후 다시 배열로 -> 중복 제거하여 체크할 문자열 도출
 * 문자열 배열 filter로 순회 -> arr 각 항목에 해당 문자열 존재 여부 체크
 * 필터링 된 배열 길이 리턴
 */
function gemstones(arr) {
	const gemString = new Set(arr.join('').split(''));
	const setString = [...gemString];
	
	const gem = setString.filter((str) => {
			let count = 0;
			for(let i=0; i<arr.length; i++) {
					if(arr[i].indexOf(str) >= 0) {
							count++;
							// console.log(str, count);
					}         
			}
			if(count === arr.length) {
					return true
			} else {
					return false
			}        
	});
	// console.log(gem)
	return gem.length;
}