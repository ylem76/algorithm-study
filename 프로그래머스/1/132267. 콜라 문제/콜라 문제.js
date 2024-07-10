function solution(a, b, n) {
    
    let initialCokes = Math.floor(n/a) * b;
    let currentCokes = initialCokes + n%a;
    let answer = initialCokes;

    
    while(currentCokes >= a) {
        
        const newCokes = Math.floor(currentCokes/a)*b;
        const namuji = currentCokes%a;
        
        answer += newCokes;
        currentCokes = newCokes + namuji
    }
    
    return answer;
}