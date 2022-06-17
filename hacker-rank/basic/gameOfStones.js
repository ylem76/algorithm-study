/**
 * 난 어렸을 때부터 이런 게임 못했음 ㅋㅋ
 * 조건에서 P2가 이기려면 남은 돌이 1이거나 0일 때 뿐
 * 왜 7이 나왔을까 discussion 둘러봤는데,
 * 돌 케이스별로 죽 늘어놓고 거기서 추론한 것 같다
 */
function gameOfStones(n) {
    console.log(n);
    if(n % 7 > 1) {
        console.log('First');
        return 'First';

    } else {
        console.log('Second');        
        return 'Second'
    }
}