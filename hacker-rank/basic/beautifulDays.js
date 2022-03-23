/*
릴리는 이런 놀이가 재밌구나
배열함수로 다루는 게 편해서 배열을 먼저 하나 만들어주고 그 안에 push
만든 배열을 map으로 돌려서 거꾸로 뒤집은 수를 만들고
계산 후 조건에 만족하면 1 아니면 0 리턴
reduce로 요소값을 더함
*/

function beautifulDays(i, j, k) {
    const arr = [];
    for(let n=i; n<=j; n++) {
        arr.push(n)
    }
    
    const answerArr = arr.map((item) => {
        const newNum = item.toString().split('').reverse().join('')
        const answer = Math.abs(item - newNum)%k === 0?1:0
        return answer
    });
    
    return answerArr.reduce((a,b)=> a+b);

}