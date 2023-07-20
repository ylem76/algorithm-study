/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// 01. time limit
// findIndex가 문제겠지...
var join = function (arr1, arr2) {
  const copiedArr1 = arr1.slice();
  arr2.forEach((item) => {
    const arrIdx = copiedArr1.findIndex((elem) => elem.id === item.id);

    if (arrIdx < 0) {
      copiedArr1.push(item);
    } else {
      copiedArr1[arrIdx] = { ...copiedArr1[arrIdx], ...item };
    }
  });
  return copiedArr1.sort((a, b) => a.id - b.id);
};

// 02. id 별로 구멍을 먼저 파고 합침
var join = function (arr1, arr2) {
  // max값을 먼저 구하고 array를 만들어줌
  const arrMax = Math.max(
    ...arr1.map((item) => item.id),
    arr2.map((item) => item.id)
  );
  const resultArr = Array.from({ length: arrMax }, (_, idx) => {
    return {};
  });

  // 각각의 배열 순회하여 값 넣어줌
  arr1.forEach((item) => {
    resultArr[item.id] = { ...resultArr[item.id], ...item };
  });
  arr2.forEach((item) => {
    resultArr[item.id] = { ...resultArr[item.id], ...item };
  });

  // 두 배열 모두에 없는 값 제거
  return resultArr.filter((item) => Object.keys(item).length > 0);
};

// 3. map editorial 참고
var join = function (arr1, arr2) {
  // map 생성
  const map = new Map();

  // arr1에 있는 데이터를 생성한 map에 set함
  for (const obj of arr1) map.set(obj.id, obj);

  // arr2에 있는 데이터를 map에 set
  for (const obj of arr2) {
    // arr2를 map에 넣어줄 때 분기 태워서

    // map에 해당 id가 없으면 그대로 set
    if (!map.has(obj.id)) map.set(obj.id, obj);
    else {
      // 아닐 땐 기존 것과 합쳐줌
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) prevObj[key] = obj[key];
    }
  }

  //console.log(map);
  // 여기서 콘솔 찍어보면 다음과 같이 되어 있는 걸 볼 수 있음
  //[
  //  {
  //    key: 1,
  //    value: {
  //      id: 1,
  //      x: 2,
  //      y: 3,
  //    },
  //  },
  //  {
  //    key: 2,
  //    value: {
  //      id: 2,
  //      x: 10,
  //      y: 20,
  //    },
  //  },
  //  {
  //    key: 3,
  //    value: {
  //      id: 3,
  //      x: 0,
  //      y: 0,
  //    },
  //  },
  //];

  // 리턴해야하는 형태는 array이므로, 새 배열 만들고
  const res = new Array();
  // map에 있는 값을 넣어줌
  for (let key of map.keys()) res.push(map.get(key));

  // map이 순회하는 순서는 저장된 순서이므로, id 기준으로 정렬한 후 리턴
  return res.sort((a, b) => a.id - b.id);
};

//const arr1 = [
//  { id: 1, x: 2, y: 3 },
//  { id: 2, x: 3, y: 6 },
//];
//const arr2 = [
//  { id: 2, x: 10, y: 20 },
//  { id: 3, x: 0, y: 0 },
//];

//console.log(join(arr1, arr2));
