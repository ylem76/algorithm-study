/*
* 계산하지 않고 일단 자릿수별로 끊으려고 했는데,
* 생각해보니 9 다음에는 자릿수 바뀌어야함
*/
function separateNumbers(s) {
	for(let i=0; i<s.length/2+1; i++){
			if(s.length % i !== 0) {
					continue;
			}
			if(s.indexOf('0') >= 0) {
					continue;
			}
			const reg = new RegExp("[0-9]{" + i + "}", 'g');
			const matchChar = s.match(reg).map(item => parseInt(item));
			
			let isBeautiful = 'YES';
			for(let j=0; j<matchChar.length-1; j++) {
					if(matchChar[j+1] - matchChar[j] !== 1) {
							break;
					}
					isBeautiful = 'NO';
			}
			console.log(s, i, matchChar, isBeautiful);
	}
}