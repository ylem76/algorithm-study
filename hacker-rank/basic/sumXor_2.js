/*
이게 답이 아닌가벼
비트 연산은 도통 모르겠다 
*/
function sumXor(n) {
    const zeroes = getZeroes(n);
    let result = n << zeroes;
    return result
        
    function getZeroes(num) {
        let count =0;
        while(num>0) {
            if((num & 1) == 0) {
                count++;
            }
            num >>= 1;
        }
        return count;
    }
}