/*
물약을 먹으면 능력보다 1칸 더 높게 점프 가능
허들을 넘으려면 물약을 몇 개 먹어야할까?

장애물 최대 높이에서 능력 간의 차이를 구하고
이 둘의 차이를 포션으로 메꾸자.
*/

function hurdleRace(k, height) {
  const maxJumpHeight = Math.max(...height);
  console.log(k, maxJumpHeight);
  
  if(k >= maxJumpHeight) {
      return 0;
  }
  console.log((maxJumpHeight-k)/2)
  return maxJumpHeight-k
}