/**
 * 대놓고 답을 베끼는데도 오답이네 왜지..?
 * 
 */

 function misereNim(s) {
    // Write your code here    
    let xr = s[0];
    let sum = s[0];
    if(s.length === 1) {
        if(s[0] > 1) {
            return 'First'    
        } else {
            return 'Second';
        }
    }
    
    for(let i=0; i<s.length; i++) {
        xr ^= s[i];
        sum += s[i];
        console.log(xr)
    }
    
    if(s.length %2 ===0) {
        return s.length != sum && xr === 0 ? 'Second' : 'First';
    } else {
        return s.length != sum || xr === 0 ? 'Second' : 'First';
    }
}