// 2715번이랑 비슷하게하고 setInterval로 변경
// 즉시 시작하게 하기 위해 fn함수 먼저 한번 실행
var cancellable = function (fn, args, t) {
  fn(...args);
  const cancelFunction = () => {
    clearInterval(timer);
  };
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  return cancelFunction;
};

const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 2000,
  cancelT = 5000;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(() => {
  //console.log(cancel);
  cancel();
}, cancelT);

setTimeout(() => {
  console.log(result); // [
  //      {"time":0,"returned":8},
  //      {"time":20,"returned":8},
  //      {"time":40,"returned":8},
  //      {"time":60,"returned":8},
  //      {"time":80,"returned":8},
  //      {"time":100,"returned":8}
  //  ]
}, cancelT + t + 15);

//cancellable(log, args, t);
