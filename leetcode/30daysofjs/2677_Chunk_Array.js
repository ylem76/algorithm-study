/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

// 문제 카테고리가 JSON이던데 왜 그런지는 잘 모르겠다

// 1안 : push
var chunk = function (arr, size) {
  const results = Array.from(
    { length: Math.ceil(arrArr.length / size) },
    () => []
  );

  arrArr.forEach((num, idx) => {
    const pushIdx = Math.floor(idx / size);
    results[pushIdx].push(num);
  });
  return results;
};

// 2안 : 2중 for 루프(pinkboots)

var chunk = function (arr, size) {
  let ans = new Array();
  const n = arr.length;

  for (let i = 0; i < n; i += size) {
    let tmp = new Array();
    for (let j = i; j < i + size; ++j) {
      if (j >= n) break;
      tmp.push(arr[j]);
    }
    ans.push(tmp);
  }
  return ans;
};

// 3안 : slice (nishant7372)
var chunk = function (arr, size) {
  const chunkedArray = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArray.push(arr.slice(i, i + size));
    i = i + size;
  }
  return chunkedArray;
};
