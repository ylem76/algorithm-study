/**
 * @param {Function} fn
 * @return {Array}
 */

// 풀어보기
Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((item) => {
    const objKey = fn(item);
    if (!myObj[objKey]) {
      myObj[objKey] = [];
    }
    myObj[objKey].push(item);
  });
  return result;
};

// if문만 없어도 훨씬 빠르네
Array.prototype.groupBy = function (fn) {
  const result = {};
  this.forEach((item) => {
    const objKey = fn(item);
    result[objKey] ? result[objKey].push(item) : (result[objKey] = [item]);
  });
  return result;
};
