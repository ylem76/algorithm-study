/*
 * easy 문제들이 그립다
 * while 문 구성하는 거 어렵다
 * 지금 1줄에 1개 매치만 있는 걸 염두에 두고 작성한건데,
 * 1줄에 여러개 일치하는 경우도 확인해보기
 */
function gridSearch(G, P) {
  const pattern = P;
  let isMatch = false;

  for (let i = 0; i <= (G.length - P.length); i++) {
    isMatch = G[i].match(pattern[0]);
    let idx = i;
    let patternIdx = 0;
    let startIdx = isMatch ? isMatch.index : 0;

    while (isMatch) {
      idx++;
      patternIdx++;
      isMatch = checkMatch(idx, patternIdx, startIdx)
      if (isMatch === false) {
        break;
      } else if (patternIdx === P.length - 1) {
        return 'YES'

      }
    }
  }
  return isMatch === null ? 'NO' : 'YES'

  function checkMatch(idx, patternIdx, startIdx) {
    console.log(idx, patternIdx, startIdx)
    const thisMatch = G[idx].match(pattern[patternIdx]);
    if (thisMatch !== null && thisMatch.index === startIdx) {
      console.log('same', thisMatch)
      return true;
    } else {
      return false;
    }
  };
}