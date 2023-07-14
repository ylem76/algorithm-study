/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// return 여러개 나오면 헷갈려

// timelimit은 함수인데, async 함수를 리턴함
// async 함수를 까 보면 내부에서 promise를 리턴하는 걸 확인할 수 있음
// timelimit => promise 리턴하고 있기 때문에 then, catch 블럭 사용 가능
var timeLimit = function (fn, t) {
  return async function (...args) {
    console.log(...args);
    const originalPromise = fn(...args);
    const rejectPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    // Promise.race 로 받아온 fn(프로미스)
    //  rejectPromise 경쟁 -> 둘 중 더 빨리 끝난 쪽을 리턴
    return Promise.race([originalPromise, rejectPromise]);
  };
};

// timeLimit의 인자로 넘기는 fn Promise 객체임
const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 1000);
limited(150).then(console.log).catch(console.log); // "Time Limit Exceeded" at t=100ms
