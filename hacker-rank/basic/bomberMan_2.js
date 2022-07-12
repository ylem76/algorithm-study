/**
 * 일단 생각한대로 풀긴 했다
 * 테스트 케이스만 겨우 맞췄지만
 * 이제 해답 보러 가야지
 */
function bomberMan(n, grid) {
    // Write your code here
    // console.log(n, grid);
    // change number
    let numericGrid = grid.map(item => {
        let newString = item.replace(/O/g, 2).replace(/\./g, 0).split('');
        const newNumeric = newString.map(item => parseInt(item));
        return newNumeric;
    });
    console.log(numericGrid);
    
    
    let timer = 1;
    let copied = [];
    while(timer < n) {
        copied.length=0;        
        for(let i=0; i<numericGrid.length; i++) {
            let inside = [];
            for(let j=0; j<numericGrid[0].length; j++) {
                // console.log(i,j)
                if(checkExplosion(numericGrid, i, j)) {
                    inside.push(0)
                }else if(numericGrid[i][j] === 3) {
                    inside.push(2)
                } else if(numericGrid[i][j] === 2) {
                    inside.push(1)
                } else if((n%2 === 1) && numericGrid[i][j] === 0) {
                    inside.push(3)
                }
            }
            copied.push(JSON.parse(JSON.stringify(inside)))
        }
        numericGrid = JSON.parse(JSON.stringify(copied));
        
        console.log('timer : ' , timer)
        for(let k=0; k<numericGrid.length; k++) {
            console.log(numericGrid[k].join(''));
        }
        timer++;
    }
    
    function checkExplosion(grid, i, j) {        
        if(i === 0) {
            if(grid[i][j] === 1) {return true;}
            if(grid[i+1][j] === 1) {return true;}
            if(grid[i][j-1] === 1) {return true;}
            if(grid[i][j+1] === 1) {return true;}
        } else if(i === grid.length - 1) {
            if(grid[i][j] === 1) {return true;}
            if(grid[i][j-1] === 1) {return true;}
            if(grid[i][j+1] === 1) {return true;}
            if(grid[i-1][j] === 1) {return true;}
        } else {
            if(grid[i][j] === 1) {return true;}
            if(grid[i+1][j] === 1) {return true;}
            if(grid[i][j-1] === 1) {return true;}
            if(grid[i][j+1] === 1) {return true;}
            if(grid[i-1][j] === 1) {return true;}
        }
        return false
    }
    console.log('result')
    console.log(numericGrid)
    const result = numericGrid.map(item => {
        for(let i=0; i<item.length; i++) {
            if(item[i] === 0) {
                item[i] = '.';
            } else {
                item[i] = 'O';
            }
        }
        console.log(item.join(''));
        return item.join('');
    })
    
    return result;
}