/*
배열 속 요소들의 개수를 구하고
최대 개수를 기존 배열의 길이에서 빼준다는 건 금방 떠올릴 수 있는데,
이 요소의 개수를 어떻게 구할까가 고민이 됐다
여러 방법이 있겠지만, 배열함수를 적극활용해보기로 했다

filter로 중복 없는 배열을 만들고
map과 filter를 겹쳐 사용하여
배열 안에 개수를 구했다
*/

function equalizeArray(arr) {
  const uniqueArr = arr.filter((item, idx) => {
      return arr.indexOf(item) === idx
  });
  const countArr = uniqueArr.map((item)=> {
      return arr.filter(elem => item === elem).length;
  });
  return arr.length - Math.max(...countArr)
}