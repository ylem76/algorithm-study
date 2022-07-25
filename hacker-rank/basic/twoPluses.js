/**
 * 최대 15X15 사이즈의 그리드에서 가장 큰 사이즈의 열십자 2쌍을 찾아야한다
 * 각각 십자 크기를 곱이 가장 큰 조합을 찾아야하니
 * 최대 9x9 사이즈부터 계산을 시작해서 한쪽은 + 다른 쪽은 - 해가면서 계산
 * 이후에는 둘다 -로 계산
 */

/*
참조 : https://www.youtube.com/watch?v=COYqFbIAAOs
맨 처음에 생각한대로 가장 큰 값이 나올 수 있는 조합을 먼저 시도하는 것이 아니라
하나씩 찾고 거기에 따라 또 하나를 찾는 구조로 되어 있다 경우의 수를 모두 구해보고
최대값을 갖고 있다가 비교해서 갈아치우도록

겹치지 않도록 마스킹했던 g를 다시 G로 바꿀 때 뭔가 문제가 있는 것 같은데 잘 모르겠다

 */

function twoPluses(grid) {
    // making border : 상하좌우 탐색할 때 오류가 나지 않도록 테두리를 미리 둘러준다
    const borderedGrid = [];
    borderedGrid.push('O'.repeat(grid[0].length + 2).split(''));
    for (let i = 0; i < grid.length; i++) {
        borderedGrid.push(('O' + grid[i] + 'O').split(''));
    }
    borderedGrid.push('O'.repeat(grid[0].length + 2).split(''));
    for (let i = 0; i < borderedGrid.length; i++) {
        console.log(borderedGrid[i].join(''));
    }

    let answer = 0;
    // iterate for first plus : 첫번째 plus 찾기
    // 1칸 짜리부터 시작해서 충족하는 경우의 수를 모두 구하고 반경을 넓혀서 계산한다
    // for문으로 모든 경우를 다 계산한다
    for (let i = 1; i < borderedGrid.length; i++) {
        for (let j = 1; j < borderedGrid[0].length; j++) {
            // track the plus
            let r = 0;
            // check for good cell
            while (
                borderedGrid[i + r][j] === 'G' &&
                borderedGrid[i - r][j] === 'G' &&
                borderedGrid[i][j + r] === 'G' &&
                borderedGrid[i][j - r] === 'G'
            ) {
                // to avoid overlap
                borderedGrid[i + r][j] = 'g';
                borderedGrid[i - r][j] = 'g';
                borderedGrid[i][j + r] = 'g';
                borderedGrid[i - r][j] = 'g';

                // iterate for second plus
                for (let k = 1; k < borderedGrid.length; k++) {
                    for (let l = 1; l < borderedGrid[0].length; l++) {
                        //track second plus
                        let iR = 0;

                        while (
                            borderedGrid[k + iR][l] === 'G' &&
                            borderedGrid[k - iR][l] === 'G' &&
                            borderedGrid[k][l + iR] === 'G' &&
                            borderedGrid[k][l - iR] === 'G') {
                            answer = Math.max(answer, (4 * r + 1) * (4 * iR + 1));
                            // console.log(answer, (4 * r + 1), (4 * iR + 1));
                            iR++;
                        }


                    }
                }
                r++;
                // console.log(r);
            }

            // revert back all the occupied cells
            //r = 0;
            //while (borderedGrid[i + r][j] === 'g' && borderedGrid[i - r][j] === 'g' && borderedGrid[i][j + r] === 'g' && borderedGrid[i][j - r] === 'g') {
            //    borderedGrid[i + r][j] = 'G';
            //    borderedGrid[i - r][j] = 'G';
            //    borderedGrid[i][j + r] = 'G';
            //    borderedGrid[i - r][j] = 'G';
            //    r++;
            //}

			for(let i =1; i<borderedGrid.length; i++) {
                for(let j=1; j<borderedGrid[0].length; j++) {
                    if(borderedGrid[i][j] === 'g') {
                        borderedGrid[i][j] = 'G'
                    }
                }
            }
        }
    }
    return answer
}