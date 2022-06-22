/**
 * 오답
 * 일단 무슨 소린지 이해가 안됨
 */
function misereNim(s) {
    // Write your code here
    // console.log(s);
    let result =0;
    const length = s.length;
    
    for(let i=0; i<s.length; i++) {
        result = result ^ s[i];
        console.log(result)
    }
    
    if(result) {
        return 'First';
    }
    return 'Second';

}