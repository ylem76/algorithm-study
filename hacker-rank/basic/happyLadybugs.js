/*
No가 나오는 조건
1. 색상이 1개 뿐이다
2. 배치가 안맞는데 빈 공간이 없다

if문으로 체크해서
위의 두 가지 경우일 때 => NO
나머지 경우 => YES
*/

function happyLadybugs(b) {
	// console.log(b);
	let result = 'YES';
	const bArr = b.split('');
	// console.log(bArr);
	
	for(let i=0; i<bArr.length; i++) {
			const thisCol = bArr[i];
			if(thisCol === '_') {
					continue;
			}
			if(bArr.indexOf(thisCol) === bArr.lastIndexOf(thisCol)) {
					result='NO'
					break;
			}        
			
			if(bArr[i-1] !== bArr[i] && bArr[i] !== bArr[i+1] && bArr.indexOf('_') < 0) {
					result='NO';
					break;
			}
	}
	return result
}