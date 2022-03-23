/*
마지막 배열 리턴할 때 정렬, 중복 값 없게
*/

function stones(n, a, b) {
	const stone = n-1;
	const result = [];
	
	// a === b
	if(a===b) {
			result.push(a*stone);
			return result;
	}

	for(let i=0; i<=stone; i++) {
			console.log(i+" : " +a*(stone-i) +'+'+ (b*i) +"="+ (a*(stone-i) + (b*i)));
			result.push(a*(stone-i) + (b*i));
	}
	return result.sort((a, b) => a - b);
}