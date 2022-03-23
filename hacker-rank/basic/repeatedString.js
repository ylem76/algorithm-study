/*
str.length : 스트링 길이
str.replace(/a/gi,'') : 모든 문자열을 변경하고 싶을때에는 정규식으로
s.substring(0, n%s.length) : 스트링 인덱스 번호대로 자르기 (배열 자르기는 array.slice())
*/

function repeatedString(s, n) {
  function checkStrA(str) {
      return str.length - str.replace(/a/gi,'').length;
  }
  const aNum = checkStrA(s);
  const remainStr = s.substring(0, n%s.length);
  const remainAnum = checkStrA(remainStr);
  const repeatNum = Math.floor(n/s.length)*aNum + remainAnum;
  return repeatNum
}
