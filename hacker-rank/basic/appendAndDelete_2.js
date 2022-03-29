/*
저번에는 남은 횟수가 짝홀 안맞을 때
%2로 거르는 부분을 제대로 구현 안해서 못 푼 거였다
*/
function appendAndDelete(s, t, k) {
	// 전체 텍스트 길이가 k보다 작으면 계산할 것도 없이 yes
	if(s.length + t.length < k) {
			return 'Yes';
	}
	
	// 동일 글자 인덱스 찾기
	let sameIdx = 0;
	for(let i=0; i<s.length; i++) {
			if(s[i] === t[i]) {
					sameIdx = i+1
			} else {
					break;
			}
	}
	
	// 실제 계산해야하는 카운트
	const changeCount = (s.length - sameIdx) + (t.length - sameIdx);    
	
	// 횟수가 짝수홀수 안맞을 때 no
	if(changeCount%2 !== k%2) {
			return 'No'
	}
	
	// 카운트 횟수가 k 보다 같거나 작으면 yes
	// (이미 짝홀 안맞는 경우는 걸렀기 때문에 무조건 Yes)
	if( changeCount <= k ) {
			return 'Yes'
	}
	
	// 이외의 경우 changeCount가 k 보다 많을 경우
	return 'No';
}