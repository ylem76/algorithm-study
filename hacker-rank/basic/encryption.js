/**
 * floor가 아니라 round로 구해야
 */
function encryption(s) {
    const str = s.replace(' ', '')    
    const max = Math.ceil(Math.sqrt(str.length));
    const min = Math.round(Math.sqrt(str.length));

    const strArr = [];
    for(let i=0; i<s.length; i+=max) {
        strArr.push(str.substring(i,i+max))
    }
    
    const result = []
    
    for(let i=0; i<max; i++) {
        let tempStr ='';
        for(let j=0; j<min; j++) {
            if(strArr[j][i] === undefined) {
                continue;
            }
            tempStr = tempStr+strArr[j][i]
        }
        result.push(tempStr);
    }
    console.log(result.join(' '))
    return result.join(' ') 
}