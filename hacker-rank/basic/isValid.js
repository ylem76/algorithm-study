/*
예전에 이거 풀다가 어려워서 난이도 낮은 것만 골라 풀었던 것 같다
그래도 이젠 좀 쉽게 느껴지네
valid 체크하는 부분이 좀 더럽긴 한데, 일단은 이대로 submit
*/
function isValid(s) {
    // make unique array    
    const arr = Array.from(new Set(s));
    
    const frequency = [];
    for(let i=0; i<arr.length; i++) {
        frequency.push(0);
    }
    
    // count frequency by unique array index
    for(let i=0; i<s.length; i++) {
        const idx = arr.indexOf(s[i]);
        frequency[idx]++
    }
    console.log(frequency);
    
    // check valid
    let count = 0;
    for(let i=0; i<frequency.length; i++) {
        const gap = Math.abs(frequency[0] - frequency[i])
        if( gap > 1) {
            return 'NO'
        } else if(gap === 1) {
            count ++
            if(count>1) {
                return 'NO'
            }
        }
    }
    return 'YES'
}
