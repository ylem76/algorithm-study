/*
예시만 보고 숫자 사이의 갭이 동일한 경우를 찾아야하는 줄 알고 복잡하게 계산했는데,
단순하게 차이만 가지고 계산하면 되는 문제였다. ^.^
*/
function maxMin(k, arr) {
    const sorted = arr.sort((a,b)=>a-b);
    
    let minUnfair = sorted[sorted.length-1];
    for(let i=0; i<sorted.length - k+1; i++) {
        console.log(sorted[i+k-1], sorted[i])
        const unfair = sorted[i+k-1] - sorted[i];
        if(minUnfair > unfair) {
            minUnfair = unfair
        }
    }
	return minUnfair;
	
	// 그냥 풀었던 시간이 아까워서 코드 그냥 남겨 둠
    const unfairness = sorted.map((item, idx) => sorted[idx+1] - item);
    console.log(unfairness)
    
    let foundArr = [];
    
    const findZero = () => {
        for(let i=0; i<sorted.length-k; i++) {
            const sliced = sorted.slice(i,i+k);
            if(sliced[0] === sliced[k-1]) {
                return true;
            }
        }
        return false;
    }
    
    if(findZero() === true) {
        return 0;
    }
    
    const findNumbers = (gap) => {
        const selectedArr = [];
        let idx = 0;
        let num = sorted[0];
        
        do{
            selectedArr.length = 0;
            num = sorted[idx];
            for(let i=0; i<k; i++) {
                if(sorted.indexOf(num) > -1) {
                    selectedArr.push(num);
                    num += gap;
                }
            }
            idx ++;
            
        } while(selectedArr.length !== k && idx<arr.length - k)
        
        if(selectedArr.length === k) {
            return selectedArr;
        } else {
            return false;
        }
    }
    
    for(let i=1; i<sorted[sorted.length-1]; i++) {
        if(findNumbers(i) !== false) {
            foundArr = findNumbers(i)
            break;
        } 
    }

    return Math.max(...foundArr) - Math.min(...foundArr);

}