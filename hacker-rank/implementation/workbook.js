/*
스프레드 연산자로 리턴할 순 없나?

페이지별로 마지막 문제 번호를 쓴 배열을 만들고
그 값을 페이지 번호랑(배열 인덱스 번호) 비교하여 답을 구했다

좀 복잡해보인다 고치고 싶다
*/
function workbook(n, k, arr) {
  const chapterArr = [];
  arr.forEach((item, idx) => {
    const contArr = [];
    const count = 0;
    for (let i = 1; i <= item; i++) {
      if (i % k === 0 || i === item) {
        contArr.push(i);
      }
    }
    chapterArr.push(...contArr);
  });
  // console.log(chapterArr);

  const resultArr = chapterArr.filter((item, idx) => {
    if (idx === 0) {
      return idx + 1;
    }

    const pageIndex = idx + 1;
    if (item <= k) {
      // chapter start
      if (pageIndex <= item) {
        return idx + 1;
      }
    } else {
      if (pageIndex <= item && pageIndex > chapterArr[idx - 1]) {
        return idx + 1;
      }
    }

    return false;
  });

  // console.log(resultArr);
  return resultArr.length;
}
