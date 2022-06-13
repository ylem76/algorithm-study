/*
시간초과 뜰 때가 난감함

*/
function sumXor(n) {
    let count = 0;
    for(let i=0; i<=n; i++) {
        if((n+i) === (n^i)) {
            count++;
        }
    }
    
    return count;
}