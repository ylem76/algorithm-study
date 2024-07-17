function solution(s) {
    // 숫자 별 테이블
    const table = {
        'zero' : 0,	
        'one' : 1,
        'two':2,
		'three':3,
		'four':4,
		'five':5,
		'six':6,
		'seven':7,
		'eight':8,
		'nine':9,
    };
    
    
    var answer = '';
    
    let tempStr = '';
    const strArr = s.split('');
    for(let i=0; i<strArr.length; i++) {
        // 0이 falsy한 값이라서 조건을 따로 써줘야함
        if(Number(s[i]) || Number(s[i]) === 0) {
            Number(s[i])
            answer +=s[i];
        } else {
            tempStr += s[i];
            if(table[tempStr] || table[tempStr] === 0) {
                answer += table[tempStr];
                tempStr = '';
            }
        }
        
    }
    
    return Number(answer)
    
}
