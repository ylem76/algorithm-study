/**
 * 거꾸로 된 문자열과 그 차이 배열로 만들고
 * 순서를 바꾸지 않은 문자열과 비교
 * 한 배열 안에서 비교하는 것보다 쉬울 것 같아서 길게 작성
 * 근데 조금 복잡해진 것 같긴 함
 * 
 */
function funnyString(s) {
	const justString = s.split('').map((item) => {
			return item.charCodeAt(0)
	});
	const reverseString = s.split('').reverse().map((item) => {
			return item.charCodeAt(0)
	});
	const getGap = (strArr) => {
			const arr = [];
			for(let i=1; i<strArr.length; i++) {
					arr.push(Math.abs(strArr[i] - strArr[i-1]));
			}
			return arr
	}
	
	const strGap = getGap(justString);
	const reverseGap = getGap(reverseString);
	
	const getIsFunny = (strGap, reverseGap) => {
			let isFunny = true
			strGap.forEach((item, idx) => {
					if(item !== reverseGap[idx]) {
							isFunny = false;
					}
			});
			return isFunny;
	}
	// console.log(getIsFunny(strGap, reverseGap));
	return getIsFunny(strGap, reverseGap)?'Funny':'Not Funny'
}
