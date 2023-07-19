// 2727. Is Object Empty
// 문제는 간단한데, 어떻게 해야 속도가 빠른거지..?

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

// 1. stringify
var isEmpty = function (obj) {
  return JSON.stringify(obj).length <= 2;
};

// 2. Object.keys
var isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};
