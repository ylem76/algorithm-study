/*
for 문으로 풀었다가 시간제한 걸려서 while로 변경해서 품
Math.sqrt() : 제곱근 구하기
(숫자)%i : 정수 실수 구분
inNumber(숫자) : 정수 실수 구분
*/

function squares(a, b) {
  
  console.log(a,b)
  const squareNumber = [];
  let currentNum = 1;
  let checkNum = 1
  while(checkNum <= b) {
      if(checkNum >= a) {
          squareNumber.push(currentNum);
      }
      currentNum ++
      checkNum = currentNum*currentNum;
  }

  // for(let i=a; i<=b; i++) {
      
  //     if(Math.sqrt(i) % 1 === 0) {
  //         squareNumber.push(i);
  //     }
  // }
  return squareNumber.length;
}