/**
 * 몇 글자를 바꿔야 anagram을 판별할 수 있을까?
 * 로직이 안 떠오른다 ㅠㅠ
 * 정렬한 문자열을 자리값마다 비교하는 게 아니라 문자열 개수별로 체크해야할 것 같은데 잘 모르겠음
 */
function anagram(s) {
	if(s.length % 2 !== 0) {
			return -1
	}
	const stringArr = Array.from(s);
	const strLen = s.length/2;
	const left = stringArr.slice(0,strLen).sort().join('');
	const right = stringArr.slice(-strLen).sort().join('');
	
	console.log(left, right);
	let count = left.length;
	for(let i=0; i<left.length; i++) {
			const regExp = new RegExp(left[i], 'g');
			console.log(left.match(regExp)?left.match(regExp).length:0);
	}
	
	// console.log(left, right)
	// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	// const al = alphabet.map((item) => {
	//     const regExp = new RegExp(item, 'g');
	//     return (left.match(regExp)?left.match(regExp).length:0) - (right.match(regExp)?right.match(regExp).length:0)
	// });
	// console.log(al)
	
	// return al.reduce((a,b) => a+b);
	// return count;

}