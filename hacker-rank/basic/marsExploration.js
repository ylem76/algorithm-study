/*
SOS 글자가 일정하게 들어가므로 각각의 글자가 들어가는 인덱스번호도 일정함
O가 들어가는 인덱스 번호는 1,4,7... 3n+1이므로
i가 O인지 S가 들어갈 자리인지 확인 후 조건을 그대로 작성해서 풀었다
*/
function marsExploration(s) {
	let count = 0;
	for(let i=0; i<s.length; i++) {
			if(i%3 === 1) {
					if(s[i] === 'O') {
							continue;
					}
					count ++;
					console.log(count);
					continue;
			} else {
					if(s[i] === 'S') {
							continue;
					}
					count++;
					console.log(count);
					continue;
			}
	}
	console.log(count)
	return count
}