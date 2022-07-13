/**
 * 오 갑자기 어렵네 다른 답지들 여러 가지 참고 해서 풀었다
 * 
 * 타이밍에 따라 하는 행동이 동일하다
 * 폭탄을 놓고, 폭발하는 게 반복된다 따라서 
 * 현재 타이밍에 맞춰서 행동을 따로따로 함수로 만들어서 실행
 * 문자열로 이루어진 배열을 숫자로 변경한 이중 배열로 변경하고
 * 시간에 따라 숫자를 카운트다운 세면서 때가 되면 폭발시킴
 * 
 * 놓친 부분 :
 * 숫자에 따라 행동하는 부분이 다름 -> 함수로 나눠서 생각해볼 수 있음
 * 폭발하는 양상이 계속 반복됨
 * 상하좌우에 폭탄이 있는지 없는지 체크해야하는데,
 * 오류 나지 않도록 배열범위를 벗어나는 걸 확인해야했는데,
 * 문법을 자꾸 비효율적으로 썼었다
 * 
 */
function bomberMan(n, grid) {
  // Write your code here
  // console.log(n, grid);

  // 숫자 배열로 변경
  // change number
  let numericGrid = grid.map(item => {
    let newString = item.replace(/O/g, 2).replace(/\./g, 0).split('');
    const newNumeric = newString.map(item => parseInt(item));
    return newNumeric;
  });
  // console.log(numericGrid);


  let timer = n > 4 ? n % 4 + 4 : n;
  let copied = [];
  console.log(timer)
  for (let k = 2; k <= timer; k++) {
    copied.length = 0;
    // n === 1 => X
    // n === 2 => place bomb
    // n === 3 => explosion
    // n === 4 => place bomb ...

    // 시간에 따라 하는 행동 구분하여 실행
    if (k % 2 === 0) {
      // place bomb
      installBomb();
      console.log('timer', k, ' : install bomb')
      for (let k = 0; k < numericGrid.length; k++) {
        console.log(numericGrid[k].join(''));
      }
    } else {
      // explosion
      bombExplode();
      console.log('timer', k, ' : bomb exploded');
      for (let k = 0; k < numericGrid.length; k++) {
        console.log(numericGrid[k].join(''));
      }
    }
  }

  function bombExplode() {
    let copied = [];
    copied.length = 0;
    for (let i = 0; i < numericGrid.length; i++) {
      let inside = [];
      for (let j = 0; j < numericGrid[0].length; j++) {
        if (checkExplosion(numericGrid, i, j)) { // top right bottm left check
          inside.push(0)
        } else {
          inside.push(numericGrid[i][j] - 1);
        }
      }
      copied.push(JSON.parse(JSON.stringify(inside)));
		}
		// 깊은 복사로 배열 업데이트
		// 계속 같은 그리드 참조해야하는데, 한 곳의 값이 바뀌면 다른 아이템에도 영향이 있어서
    numericGrid = JSON.parse(JSON.stringify(copied));
  }

  function checkExplosion(grid, i, j) {
    // 폭탄 터지는지 감지
		// 조건이 되는 것만 하나씩 실행하도록
    if (grid[i][j] === 1) {
      return true;
    }

    if (i > 0) {
      if (grid[i - 1][j] === 1) {
        return true;
      }
    }
    if (i < grid.length - 1) {
      if (grid[i + 1][j] === 1) {
        return true;
      }
    }
    if (j > 0) {
      if (grid[i][j - 1] === 1) {
        return true;
      }
    }
    if (j < grid[0].length - 1) {
      if (grid[i][j + 1] === 1) {
        return true;
      }
    }
    return false
  }

	function installBomb() {
		// 폭탄 설치
    let copied = [];
    copied.length = 0;
    for (let i = 0; i < numericGrid.length; i++) {
      let inside = [];
      for (let j = 0; j < numericGrid[0].length; j++) {
        if (numericGrid[i][j] === 0) {
          inside.push(3);
        } else {
          inside.push(numericGrid[i][j] - 1);
        }
      }
      copied.push(JSON.parse(JSON.stringify(inside)));
    }
    numericGrid = JSON.parse(JSON.stringify(copied));
  }

	console.log('result')
	// 다시 문자열로 이루어진 배열로 변환
  const result = numericGrid.map(item => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === 0) {
        item[i] = '.';
      } else {
        item[i] = 'O';
      }
    }
    console.log(item.join(''));
    return item.join('');
  });

  return result;
}