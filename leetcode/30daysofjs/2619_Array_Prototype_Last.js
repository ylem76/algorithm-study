Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

Array.prototype.last = function () {
  // return this.length ? this[this.length -1] : -1
  // 오 이렇게 쓰면 되겠군
  return this[this.length - 1] ?? -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
