/*
22.01.24

이전에 풀었던 것보다 쉬웠음
while루프 사실 손에 잘 안익었는데,
문풀하면서 많이 쓰는 것 같다

한번에 움직일 수 있는 이동량이 1혹은 2,
두 가지 경우 뿐이므로 값을 확인해서 수정
*/
function jumpingOnClouds(c) {
  let step = 0;
  let stepCount = 0;
  const length = c.length - 1;
  while (step < length) {
      if(c[step + 2] === 0) {
          step = step + 2;
      } else {
          step = step + 1;
      }
      stepCount++;
  }
  return stepCount
}