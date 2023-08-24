///**
// * @param {Object} obj
// * @return {Object}
// */

//// array와 obj 나눠서 생각해봄
//var compactObject = function (obj) {
//  if (Array.isArray(obj)) {
//    const returnVal = obj
//      .filter((item) => Boolean(item))
//      .map((item) => {
//        return typeof item === "object" ? compactObject(item) : item;
//      });
//    console.log(returnVal);
//    return returnVal;
//  } else {
//    //obj
//    const returnVal = Object.entries(obj)
//      .filter(([key, value]) => Boolean(value))
//      .map((item) => {
//        return typeof item === "object" ? compactObject(item) : item;
//      });
//    return Object.fromEntries(returnVal);
//  }
//};

//// 그 둘을 합쳐봄
//var compactObject = function (obj) {
//  if (typeof obj !== "object") {
//    return obj;
//  }
//  const filterdObj = Object.entries(obj)
//    .filter(([_, value]) => Boolean(value))
//    .map((item) => {
//      const [key, value] = item;
//      if (typeof value === "object") {
//        return [key, compactObject(value)];
//      }
//      return item;
//    });

//  if (Array.isArray(obj)) {
//    return filterdObj.map(([_, val]) => val);
//  } else {
//    return Object.fromEntries(filterdObj);
//  }
//};

//// 그런데도 너무 느려서 다들 어떻게 풀었나 찾아봄
//// 아무래도 오브젝트를 엔트리로 만들었다가 다시 돌리는 게 문제인 것 같음

function compactObject(obj) {
  // stack 구조 생성 : 이중 배열을 만들고 0번은 obj, 1번은 obj의 타입에 따라 빈 배열이나 빈 오브젝트 생성
  const stack = [[obj, Array.isArray(obj) ? [] : {}]];

  // 콘솔 찍어보면 아래와 같음
  //console.log(stack);
  //[[
  //    {a: null, b: [false, 1],},
  //    {},
  //],];

  // newObj는 아까 추가한 빈 배열(혹은 오브젝트)임
  let newObj = stack[0][1];
  //console.log(newObj);
  // {}

  while (stack.length > 0) {
    //console.log(stack.length);
    console.log("stack : ", JSON.stringify(stack));
    const nowObj = stack.pop(); // stack의 가장 첫번째 아이템
    const [currObj, newCurrObj] = nowObj; // currObj = obj와 동일, newCurrObj = newObj

    console.log("currObj ::", currObj, newCurrObj);

    // 배열 혹은 오브젝트 순회
    for (const key in currObj) {
      const val = currObj[key];

      // 값이 falsy 하면 현재 for루프 중단하고 다음 루프로 이동
      if (!val) continue;

      // 현재 값이 객체 혹은 배열이 아닌 경우
      if (typeof val !== "object") {
        // newCurrObj 타입에 따라서 push 하거나 key를 이용해 값을 넣어줌
        Array.isArray(newCurrObj)
          ? newCurrObj.push(val)
          : (newCurrObj[key] = val);
        console.log(JSON.stringify(newObj));
        continue;
      }

      // 배열 혹은 객체인 경우
      // subObj를 비슷하게 만듦
      const newSubObj = Array.isArray(val) ? [] : {};
      Array.isArray(newCurrObj)
        ? newCurrObj.push(newSubObj)
        : (newCurrObj[key] = newSubObj);
      stack.push([val, newSubObj]);
      console.log("[val, newSubObj] :", JSON.stringify([val, newSubObj]));

      console.log(JSON.stringify(newObj));
    }
  }
  //console.log(JSON.stringify(newObj));
  return newObj;
}

compactObject([null, 0, 5, [0], [false, 16, [1, 2, 3]]]);
