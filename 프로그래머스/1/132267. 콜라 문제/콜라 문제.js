function solution(a, b, n) {
    var answer = 0;
    const arr = []
    
    let initialCokes = Math.floor(n / a) * b;
    arr.push(initialCokes + n % a);
    answer += initialCokes;
    
    while(arr[arr.length-1] >= a) {
        let newCokes = Math.floor(arr[arr.length - 1] / a) * b;
        answer += newCokes;
        arr.push(newCokes + arr[arr.length - 1] % a);
    }
    
    
    console.log(arr)
        
        
    return answer;
}