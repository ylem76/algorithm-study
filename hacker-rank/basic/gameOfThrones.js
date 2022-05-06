/**
 * anagram 풀 때 시간초과 났던 코드 이용
 * string을 set객체를 이용해 중복 제거한 배열로 변환
 * 배열을 돌면서 해당 캐릭터가 문자열에 몇 개 들어 있는 지 계산
 * 필터 함수로 홀수인 경우만 남겨둠
 * 홀수인 경우가 2 이상이면 No 아니면 Yes
 */

function gameOfThrones(s) {
    const arr = Array.from(new Set(s.split('')));
    const countArr = arr.filter(item => {
        const regExp = new RegExp(item, 'g');
        if(s.match(regExp).length%2 === 0) {
            return false
			}
			return true
    });
    
    return countArr.length<2 ? 'YES' : 'NO'
}