function appendAndDelete(s, t, k) {
  // 10번 테스트가 걸리는데 진짜 모르겠다
  // 내일 다시 재도전
  console.log(s, t, k);
  const newS = s.split('');
  const newT = t.split('');
  // console.log(newS, newT);
  let diffIdx = null;    
  for(let i=0; i<newS.length; i++ ){
      diffIdx = i;
      if (newS[i] !== newT[i]) {
          break;
      }
  }
  // console.log((newS.length - diffIdx)+ (newT.length - diffIdx))
  console.log(diffIdx)
  console.log((newS.length - diffIdx), (newT.length - diffIdx))
  
  // const result =  ? 'Yes' : 'No';
  const tryCount = (newS.length - diffIdx) + (newT.length - diffIdx);
  console.log(tryCount);
  if(tryCount > k) {
      return 'No';
  } else if(tryCount === k) {
      return 'Yes'
  } else {
      return 'Yes'
  }
}