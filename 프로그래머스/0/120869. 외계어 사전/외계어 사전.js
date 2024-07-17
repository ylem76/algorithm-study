function solution(spell, dic) {
    console.log(spell, dic)
    var answer = 2;
    
    // 길이가 다른 문자 삭제
    const filtered = dic.filter(word => word.length === spell.length);
    
    // 이중for문으로 각각의 글자 비교
    for(let i=0; i<filtered.length; i++) {
        const word = filtered[i].split('');
        for(j=0; j<spell.length; j++) {
            if(word.includes(spell[j])) {
                // 마지막 글자까지 다 맞으면 존재하는 것
                if(j===spell.length -1) {
                    answer = 1;
                    return answer;
                }
            } else {
                break;
            }
            
        }
        
        
    }
    return answer;
    
}