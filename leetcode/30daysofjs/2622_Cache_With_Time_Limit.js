/**
 * 어디에 타임아웃 아이디를 저장할까? 이게 고민하다가 간단하게 그냥
 * TimeLimitedCache 클래스의 인스턴스 변수 선언하여 여기에 timeoutid를 저장하게끔 만들었다
 * 일단 이렇게 작성하고 통과가 안 되면 key 별로 따로 만들어줘야지 생각했는데,
 * 되었으니 다행
 */

// var TimeLimitedCache = function() {
//   cache = {};
// };

class TimeLimitedCache {
  cache = {};
  timer;
  countNum = 0;
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const result = this.cache[key] === undefined ? false : true;

  if (result) {
    this.countNum--;
    clearTimeout(this.timer);
  }

  this.timer = setTimeout(() => {
    delete this.cache[key];
    this.countNum--;
  }, duration);

  this.cache[key] = value;
  this.countNum++;

  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const value = this.cache[key];
  return value === undefined ? -1 : value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.countNum;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
