/*
 * 쓰라는 비트 연산자는 안 쓰고 아주 무식하게 풀었다
 * 비트 연산자가 생소해서 조금 더 들여다봐야 쓸 수 있을 것 같음
 * 자릿수 채우기 : padStart(32,'0')
 * 2진수로 변환 : toString(2)
 * 10진수 변환 : parseInt(number, 2)
*/
function flippingBits(n) {
    const number = n.toString(2).padStart(32,'0');
    const numArr = number.split('').map(item => {
        if(item ==='0') {
            return '1'
            } else {
            return '0'
            }
        }).join('');
    return parseInt(numArr, 2);
}
