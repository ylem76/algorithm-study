/**
 * 바꾸려는 숫자가 제자리에 있으면 k 차감X
 * 이거 놓쳐서 3일 고생했네. 문제를 잘 읽자
 */

function largestPermutation(k, arr) {
    // Write your code here
    // console.log(arr)
    
    const sorted = arr.slice().sort((a,b) => b-a);
    // console.log(k, arr, sorted);
    
    let thisNum = sorted[0];
    let count = k;
    
    Array.prototype.swap = function (x,y) {
        var b = this[x];
        this[x] = this[y];
        this[y] = b;
        return this;
    }

    for(let i=0; i<arr.length; i++) {
        if(count === 0) {
            break;
        }
        
        const maxIdx = arr.indexOf(thisNum);
                
        if(i !== maxIdx) {
            count --;            
        }
        arr = arr.swap( i, maxIdx )
        thisNum --;
    }
    return arr;
}