/*
* 내용 이해하는 데 좀 오래 걸렸다
* 시간 초과 나서 다시 해야...
*/
function decentNumber(n) {
    // Write your code here
    const count = [];
    for(let i=0; i<=n; i+=3) {
        for(let j=0; j<=n; j+=5) {
            if((i + j) === n) {
                count.push(i);
                count.push(j);
            }
        }
    }
    
    // console.log(count);
    
    let answer = '';
    for(let i=0; i<count[count.length-2]; i++) {
        answer += '5';
    }
    for(let i=0; i<count[count.length-1]; i++) {
        answer += '3';
    }
    answer = !answer?-1:answer;
    console.log(answer);
}