/*
  숫자로 하는 방법 찾아보고 다시 해봤는데 어렵네 어려워
  지수 연산으로 각각의 자릿수 구하기
  const num = n%(10*10**i)/(10**i);
*/
function findDigits(n) {
    const digit = [];
    let i = 0;
    while(Math.floor((n/(10 ** i)))) {
        const num = n%(10*10**i)/(10**i);
        digit.push(Math.floor(num));
        i++
    }
    let count = 0;
    digit.forEach((item) => {
        if (item === 0) {
            return;
        }
        if (n % item === 0) {
            count++;
        }
    });
    return count;
}