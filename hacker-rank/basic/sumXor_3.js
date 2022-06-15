/*
* https://medium.com/@mlgerardvla/hackerrank-sum-vs-xor-63e18dbd11cf
* 이거 보고 0의 개수를 구하는 이유를 대충 파악함
* 이전 소스에서는 비트 이동 연산자에서 오류가 나서 제대로 답이 안 나왔음
* 연산자 자체에 익숙한 게 아니라 왜 틀렸는지는 잘 모르겠음
* 대신 위의 출처에 나온 다른 방법으로 도출하여 품
*/
function sumXor(n) {
    const zeroes = getZeroes(n);
    console.log('zeroes : ', zeroes)
    let result = Math.pow(2, zeroes)
    return result
        
    function getZeroes(num) {
        const string = num.toString(2);
        let count =0;
        if(num === 0) {
            return count
        }
        for(let i=0; i<string.length; i++) {
            if(string[i] === '0') {
                count ++;
            }
        }
        return count;
    }
}
