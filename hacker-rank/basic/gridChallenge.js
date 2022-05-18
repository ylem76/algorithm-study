/**
 * 전체적인 알고리즘 자체는 어렵지는 않았는데,
 * 이중for문에서 헷갈려서 한참 걸림 ^_ㅜ
 */
function gridChallenge(grid) {
    const sortedGrid = grid.map(item => {
        return item.split('').sort().map(char => {return char.charCodeAt()});
    })
    
    console.log(sortedGrid, sortedGrid[0].length-1, sortedGrid.length-1)
    for(let i=0; i<sortedGrid[0].length; i++) {
        for(let j=0; j<sortedGrid.length-1; j++) {
            console.log(i,j, sortedGrid[j][i])
            
            if(sortedGrid[j][i] > sortedGrid[j+1][i]){
                return 'NO'
            }
        }
    }
    return 'YES'
}