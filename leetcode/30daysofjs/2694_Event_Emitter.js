/*
맨 처음 시도에서 Event Emitter 개념을 제대로 이해하지 못하고 풀려고 해서 문제였다
이벤트 이름에 해당하는 콜백함수를 subscribe를 통해 추가하고
emit 메서드를 통해 등록한 콜백함수를 실행하는 구조

맨 처음에는 이벤트 별 구분 없이 하나의 배열로 관리하려고 해서 풀리지 않았음
*/

class EventEmitter {
  subList = {};
  subscribe(event, cb) {
    if (this.subList[event] === undefined) {
      this.subList[event] = [];
    }
    this.subList[event].push(cb);
    return {
      unsubscribe: () => {
        this.subList[event].splice(0, 1);
      },
    };
  }

  emit(event, args = []) {
    if (this.subList[event]) {
      return this.subList[event].map((cbFn) => cbFn(...args));
    } else {
      return [];
    }
  }
}
