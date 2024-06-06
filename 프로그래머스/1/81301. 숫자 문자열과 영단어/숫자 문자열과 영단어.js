function solution(s) {
    
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
    
    let tempStr = ''
    const strArr = s.split('')
    for(let i=0; i<strArr.length; i++) {
        
        if(Number(strArr[i]) || Number(strArr[i]) === 0) {
            Number(strArr[i])
            answer +=strArr[i];
        } else {
            tempStr += strArr[i];
            if(table[tempStr] || table[tempStr] === 0) {
                answer += table[tempStr];
                tempStr = '';
            }
        }
        
    }
    
    return Number(answer)
    
}
