/**
 * 일단 되는대로 쉬운 거 어렵게 푸는 중...
 */

function bomberMan(n, grid) {
	// Write your code here
	console.log(n, grid);
	// change number
	const numericGrid = grid.map(item => {
			let newString = item.replace(/O/g, 2).replace(/\./g, 0).split('');
			const newNumeric = newString.map(item => parseInt(item));
			return newNumeric;
	});
	
	let timer = 0;
	while(timer < n) {
			console.log('timer : ' , timer)
			for(let k=0; k<numericGrid.length; k++) {
					console.log(numericGrid[k].join(''));
			}
			
			timer++;
			for(let i=0; i<numericGrid.length; i++) {
					for(let j=0; j<numericGrid[0].length; j++) {
							if(checkExplosion(grid, i, j)) {
									numericGrid[i][j] = 0;
							} else if(numericGrid[i][j] === 2) {
									numericGrid[i][j] = 1;
							} else if(numericGrid[i][j] === 0) {
									numericGrid[i][j] = 2;
							}
							
					}
			}
			
	}
	
	function checkExplosion(grid, i, j) {
			if(numericGrid[i][j] === 1) {
					return true;
			}
			
			if(i > 0) {
					if(numericGrid[i-1][j] === 1) {
							return true
					}
			} else if(i<numericGrid.length-1) {
					if(numericGrid[i+1][j] === 1) {
							return true
					}
					
			} else if(j > 0) {
					if(numericGrid[i][j-1] === 1) {
							return true
					}
			} else if(j<numericGrid[0].length-1) {
					if(numericGrid[i][j+1] === 1) {
							return true
					}
			}
			
			
			return false
	}
	
	return numericGrid;
}