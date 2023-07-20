/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

// 1트 : Runtime 91.76%
var flat = function (arr, n) {
  const result = [];

  const flattenFn = (arr, depth) => {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth < n) {
        flattenFn(item, depth + 1);
      } else {
        result.push(item);
      }
    });
  };
  flattenFn(arr, 0);

  return result;
};

// 재귀
var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  let answer = [];

  arr.forEach((element) => {
    if (n > 0 && Array.isArray(element)) {
      answer.push(...flat(element, n - 1));
    } else {
      answer.push(element);
    }
  });

  return answer;
};
