/**
 * 어차피 스트링 내에 문제가 되는 게 1글자 뿐이니
 * for루프를 앞에서 뒤에서 각각 1글자씩 비교하면 됨
 * 글자가 다른 경우에 앞 인덱스가 잘못된 건지 뒷쪽이 잘못된건지 계산하기 위해
 * 그 다음 글자와 비교하여 답 도출했음
 * 1글자만 비교하니 엉뚱한 거 찾는 경우가 있어서 2글자 체크한 후 답 리턴함
 * 다른 풀이도 찾아보고 분량은 적은데 오래 헤맸다 진짜
 */

function palindromeIndex(s) {
	for(let i=0; i<s.length; i++) {
			if(s[i] !== s[s.length-i-1]) {            
					if(s[i+1] === s[s.length-i-1] && s[i+2] === s[s.length-i-2]) {
							return i
					} else {
							return s.length - i -1
					}
			}
	}
	return -1
}