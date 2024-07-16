function solution(arr)
{
    var answer = [arr[0]];
    
    for(let i=1; i< arr.length; i++) {
        const last = answer[answer.length-1];
        
        if(arr[i] !== last) {
            answer.push(arr[i])
        }
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}