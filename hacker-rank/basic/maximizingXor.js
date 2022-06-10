/**
 * xor 연산자 ^
 * 연산자 우선순위가 있어서 xor 쪽에 괄호 쳐 줘야 결괏값이 제대로 나온다
 */
function maximizingXor(l, r) {
    // Write your code here
    let maxNum = 0;
    
    for(let i=l; i<=r; i++) {
        for(let j=i; j<=r; j++) {
            if((i^j) > maxNum) {
                maxNum = i^j
            }
        }
    }
    return maxNum;
}