/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 * valueOf() 메서드는 특정 객체의 원시 값을 반환
 * toString() 은 문자열을 반환
 */

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((a, b) => a + b, 0);
};

ArrayWrapper.prototype.toString = function () {
  // 이거나 저거나 속도는 비슷했다
  return "[" + this.nums.join(",") + "]";
  //return JSON.stringify(this.nums)
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
