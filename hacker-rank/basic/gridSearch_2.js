/**
 * 111111111
 * 11
 * 0,2,4,6,8
 * 정규식 match로 찾을 땐 모든 문자열이 동일해도 
 * 0,1,2,3,4,.. 로 찾지 않는다
 * 묶음 단위로 찾아서 새로운 함수를 만들어서 작업함
 */

function gridSearch(G, P) {
    const pattern = P;
    let isMatch = [];
        
    for(let i=0; i<=(G.length - P.length); i++) {
        // var regex = new RegExp(pattern[0], 'g');
        // isMatch = [...G[i].matchAll(regex)];
        
        isMatch = checkFirstMatch(G[i], P[0], G[i].length - P[0].length);
        //console.log(isMatch)
        for(let j=0; j<isMatch.length; j++) {
            const patternIdx = 0;
            const startIdx = isMatch[j].index;
            if(checkMatch(i, patternIdx, startIdx) === true) {
                return 'YES';
            }
        }
    }
    return 'NO';
    
    function checkFirstMatch(string, pattern, lineLength) {       
        const result = [];        
        for(let i=0; i<=lineLength; i++) {
            if(string.substring(i, i+pattern.length) === pattern) {
                result.push({index:i});                
            }
        }
        return result;
    }
    
    function checkMatch(idx, patternIdx, startIdx) {
        let result = false;
        while(true) {
            idx++;
            patternIdx++;
            const subStr = G[idx].substring(startIdx, startIdx+(pattern[patternIdx].length));
            if(subStr !== pattern[patternIdx]) {
                break;
            } else if(patternIdx === P.length-1) {
                result = true;
                break;
            }
        }
        return result;
    };
}