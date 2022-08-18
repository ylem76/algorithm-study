/*
단방향으로 진행 하는 것만 생각했는데,
뒤에서 앞으로 진행하는 발상을 하지 못했었음

for문 거꾸로 돌리는 거 가끔 엄청나게 헷갈릴 때가 있다
차근차근 생각해보자
*/
function candies(n, arr) {
    const candyArr = [1];

    for(let i=1; i<arr.length; i++) {
        const candyNum = arr[i-1] < arr[i]?candyArr[i-1]+1:1;
        candyArr.push(candyNum);
    }
    for(let i=candyArr.length-2; i>=0; i--) {
        if(arr[i+1] < arr[i] && candyArr[i+1] >= candyArr[i]) {
            candyArr[i] = candyArr[i+1]+1;
        }
    }
    return candyArr.reduce((a,b)=> {return a+b});
}