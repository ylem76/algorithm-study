// 난도가 easy라서 sort로 풀었는데, 이게 아닌가..?

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  const result = arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
  return result;
};
