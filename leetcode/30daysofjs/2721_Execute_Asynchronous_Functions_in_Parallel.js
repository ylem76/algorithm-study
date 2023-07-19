//promise.all 쓰지 않고 푸는 게 조건이었는데,
//promise.all을 써도 어떻게 해야할 지 모르겠는걸?

// 먼저 functions를 콘솔로 찍어보면 다음과 같이 나온다
//[
//  [Function (anonymous)],
//  [Function (anonymous)],
//  [Function (anonymous)]
//]

// 문제 조건에서 말한 대로 함수 배열이 나오는데,

// 1. Promise.all로 풀이하기
// Promise.all의 인자로는 promise만 가능 -> 함수를 다 실행하여 이걸 promise로 받아서
// Promise.all의 인자로 넣고 실행

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = async function (functions) {
  return Promise.all(functions.map((fn) => fn()))
    .then((result) => result)
    .catch((e) => {
      throw e;
    });
};
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// 2. promise.all pollyfill
// 먼저 promise로 리턴 해야 한다는 점~
// for문으로 모든 promise 실행할 건데 여기서 실행한 promise결과를 다 갖고 있다가
// 마지막 promise 결과가 나왔을 때 resolve 해서 값을 도출해야하기 때문
// 그냥 for문으로 함수만 돌리면 then블럭을 기다리지 않음 ㅠ
// count로 실제 promise가 모두 실행되었는지 확인(결과 도출할 때마다 count--)
// count가 0이 되는 순간(=마지막 promise가 반환되는 순간)
// 해당 값을 resolve

var promiseAll = async function (functions) {
  // 프로미스 리턴
  return new Promise((resolve, reject) => {
    // 결과 배열 생성
    const results = Array.from({ length: functions.length });

    // 프로미스 완료 카운터
    let count = 0;

    functions.forEach((fn, idx) => {
      fn() // 파라미터로 받은 개별 함수 실행
        .then((data) => {
          // promise완료 후
          results[idx] = data;
          count++;

          // 값 비교하고 현재 promise resolve
          if (count === functions.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          // 오류 처리 안 하니까 런타임 에러 났다
          // 오류 처리 꼭 하기
          reject(e);
        });
    });
  });
};
