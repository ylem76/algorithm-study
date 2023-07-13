// 어제 보니까 소스를 잘못 옮겨서 이상하게 동작했었네
// 용케 넘어갔다 진짜
var cancellable = function (fn, args, t) {
  const cancelFunction = () => {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFunction;
};

const result = [];

const fn = (x) => x * 5;

const args = [2],
  t = 2000,
  cancelT = 5000;

const start = performance.now();

const log = (...argsArr) => {
  console.log("log");
  const diff = Math.floor(performance.now() - start);

  // fn 함수는 result 배열에 push될 때 실행
  result.push({
    time: diff,
    returned: fn(...argsArr),
  });
};

// cancellable의 함수로 fn이 아니라 log가 들어간다
// 그래서 t 시간마다 log 함수가 실행됨
const cancel = cancellable(log, args, t);
// cancellable의 리턴값이 cancelFunction이니까 log가 실행되면 cancellable도 실행됨

setTimeout(() => {
  cancel();
}, cancelT);

// t < cancelT일때는 매 t마다 실행이 되고
// t > cancelT일 때는 cancellable 내부에서 log함수가 실행되지 않음

const maxT = Math.max(t, cancelT);
//const maxT = t;

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 1);
