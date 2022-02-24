/*
선물은 적당히만 사자 ^___^
숫자 자리수가 너무 클 때가 문제
모든 숫자를 BigInt로 변경하고 실행
문제 조건에 나오는 숫자 범위를 인지하고 미리미리 바꿔주는 게 좋을 듯
*/

function taumBday(b, w, bc, wc, z) {
  let result = 0;
  
  const bn = BigInt(b);
  const wn = BigInt(w);
  const blc = BigInt(bc);
  const whc = BigInt(wc);
  const cc = BigInt(z);
  
  const gap = Math.abs(bc - wc);
  
  // if문
  // if문이 더 보기 쉬운 듯

  if(gap <= z) {
      result = BigInt(bn*blc + wn*whc);
  } else if(blc < whc){
      result = BigInt(bn*blc + wn*(blc+cc));
  } else if(whc < blc) {
      result = BigInt(bn*(whc+cc) + wn*whc);
  }

  // 삼항연산자
  
  //   if(gap <= z) {
  //     result = BigInt(bn*blc + wn*whc);
  // } else {      
  //     result = BigInt(bn* (blc > whc ? whc+cc : blc) + wn * (whc > blc ? blc+cc : whc));      
  // }

  return result

}