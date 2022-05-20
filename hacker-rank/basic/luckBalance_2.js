/**
 * 중요 경기 중요하지 않은 경기 나눠서 sort
 * 이겨야 하는 경기(중요 경기 - 져도 되는 경기 - 1(배열은 0부터 시작하니까 ㅎ...))만큼 빼주고
 * 나머지는 count 변수에 +
 * filter().map().sort연달아서 썼는데,
 * 이 부분 좀 깔끔하게 바꾸면 좋을 것 같긴 하다
 * */
function luckBalance(k, contests) {
    const importantContest = contests.filter((item) => {
        if(item[1] === 0) {
            return false
        } else {
            return true
        }
    }).map(item=> item[0]).sort((a, b) => a-b);
    const unimportantContest = contests.filter((item) => {
        if(item[1] === 0) {
            return true
        } else {
            return false
        }
    }).map(item=> item[0]).sort((a, b) => a-b);
    
    const sortedArr = importantContest.concat(unimportantContest)
    
    let count = 0;
    
    for(let i=0; i< sortedArr.length; i++) {
        console.log(count, i, k, importantContest.length-k-1)
        if(i<=importantContest.length-k-1) {
            count -= sortedArr[i]
        } else {
            count += sortedArr[i]
        }
    }
    return count
}