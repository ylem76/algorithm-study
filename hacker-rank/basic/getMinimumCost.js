/*
greedy florist

나의 독해력 괜찮은가?
가끔 잘못 걸리면 이해가 안가서 한참 걸리기도 한다

한 사람이 개수를 많이 사면 살수록 손해
바가지 쓰고 사는 꽃의 가격이 비싸면 손해

주어진 배열을 가격 순으로 정렬해서 바가지 쓰는 가격을 각각 더해줌
인원수만큼 바가지 가격이 더해지는 게 포인트
*/

function getMinimumCost(k, c) {
    const sorted = c.sort((a, b) => a - b);
    const bagajiArr = [];
    for(let i=0; i<c.length; i++) {
        bagajiArr.push(1);
    }
    
    let num = 1;
    let count = 1;
    for(let i=sorted.length-1; i>=0; i--) {
        if(count > k) {
            num++
            count =1;
        }
        bagajiArr[i] = num;
        count++;
    }
    
    console.log(bagajiArr);
    
    let result = 0;
    for(let i=0; i<c.length; i++) {
        result += bagajiArr[i]*sorted[i]
    }
    
    return result
}