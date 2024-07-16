function solution(spell, dic) {
    console.log(spell, dic)
    var answer = 2;
    
    
    const filtered = dic.filter(word => word.length === spell.length);
    
    for(let i=0; i<filtered.length; i++) {
        const word = filtered[i].split('');
        for(j=0; j<spell.length; j++) {
            if(word.includes(spell[j])) {
                console.log(word)
                console.log(j===spell.length -1)
                if(j===spell.length -1) {
                    answer = 1;
                    
                }
            } else {
                break;
            }
            
        }
        
        
    }
    return answer;
    
}