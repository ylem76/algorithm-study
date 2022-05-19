/*
* 일부 오답 처리된다
* 일단 다 펼쳐놓고 어떻게 해야하나 테스트 해봤는데, 좀 더 확인해봐야할 듯
*/

function luckBalance(k, contests) {
    // Write your code here
    console.log(k, contests)

    const importantContest = contests.filter((item) => {
        if(item[1] === 0) {
            return false
        } else {
            return true
        }
    })
    const unimportantContest = contests.filter((item) => {
        if(item[1] === 0) {
            return true
        } else {
            return false
        }
    });
    
    const getIdxContest = contests.filter((item) => {
        if(item[1] === 0) {
            return false
        } else {
            return true
        }
    }).map(item => item[0])
    
    
    const sortedContest = contests.filter((item) => {
        if(item[1] === 0) {
            return false
        } else {
            return true
        }
    }).map(item => item[0]).sort((a,b)=> b-a).slice(k);
    
    
    
    
    
    const looseContest = sortedContest.map(item => {
        return getIdxContest.indexOf(item)
    });
    
    let count = 0;
    for(let i=0; i<importantContest.length; i++) {
        if(looseContest.indexOf(i) < 0) {
            count += importantContest[i][0];
        } else {
            count -= importantContest[i][0];
        }
             
    }
    console.log(importantContest, count)
    
    for(let i=0; i<unimportantContest.length; i++) {
        count += unimportantContest[i][0];
    }
    console.log( unimportantContest, count)
    
    return count
    
    
    

}
