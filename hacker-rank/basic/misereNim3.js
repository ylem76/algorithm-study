/**
 * 소스 및 설명 출처 : https://hanil2.tistory.com/90
 * 
 * 현재 상태가 '균형 상태'이면 다음 차례의 플레이어(First)는 패배한다.
 * 각 pile의 수를 2의 거듭제곱으로 나타냈을 때 나타나는 수들이 쌍(pair)을 이룰 때 '균형 상태'
 * '균형 상태'의 각 pile을 XOR 연산하여 0이 되면 '균형 상태'로 판단
 * 여기에  [모든 pile의 stone이 '1'일 때 pile의 갯 수의 홀수 여부]를 추가
 * 
 */

function misereNim(s) {
    let result =0;
    let one = 1;
    const length = s.length;
    
    
    for(let i=0; i<s.length; i++) {
        result ^= s[i];
        one *= s[i];
    }
    
    if(one === 1) {
        if(s.length %2 ===1) {
            return 'Second';
        } else {
            return 'First'
        }
    }
    
    if(result) {
        return 'First';
    }
    return 'Second';
}