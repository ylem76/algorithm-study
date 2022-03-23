/*
1. 3:3 배열이 안될 때는 배열 그대로 리턴하기
2. X로 변환한 값을 넣어줄 새로운 배열 만들기
3. 0행과 마지막 행은 직접 넣어줌
4. 나머지 행은 2중 for문으로 타겟 글자의 상하좌우 값을 구하고 타겟과 비교
5. tempTxt변수를 이용해 X로 변환한 값을 새로운 배열에 넣고 리턴

알고리즘 강의를 좀 들어야겠다
*/

function cavityMap(grid) {
	if(grid.length < 3 || grid[0].length < 3) {
			return grid;
	}
	function substrAt(string, idx, text) {
			return string.substr(0, idx) + text + string.substr(idx + text.length);
	}
	const newGridArr = [];
	newGridArr.push(grid[0]);
	
	for(let i=1; i<grid.length-1; i++) {
			let tempTxt= grid[i];
			for(let j=1; j<grid[0].length-1; j++) {
					const target = parseInt(grid[i][j]);
					const upNum = parseInt(grid[i-1][j]);
					const rightNum = parseInt(grid[i][j+1]);
					const downNum = parseInt(grid[i+1][j]);
					const leftNum = parseInt(grid[i][j-1]);
					
					if( target > upNum && target > rightNum && target > downNum
							&& target > leftNum) {
									tempTxt = substrAt(tempTxt, j, 'X');
					}
			}
			newGridArr.push(tempTxt);
	}
	newGridArr.push(grid[grid.length-1]);
	return newGridArr;
}