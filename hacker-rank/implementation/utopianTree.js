/*
봄에는 2배(비례형) 여름에는 +1(정수형)
현재 사이클이 봄인지 여름인지 %로 확인하고
각각 연산
*/

function utopianTree(n) {
    // Write your code here    
    let height = 1;
    for(let i=0; i<n; i++) {
        if(i%2 == 0) {
            height = height*2;
        } else {
            height = height+1;
        }
    }
    return height
}