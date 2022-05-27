/*
* splice, slice
* 깊은 복사 얕은 복사
* sort 함수
*/

function largestPermutation(k, arr) {
    // Write your code here
    
    const sorted = arr.slice().sort((a,b) => b-a);
    // console.log(k, arr, sorted);
    
    const compareArr = function(sorted, arr, idx) {
        for(let i=idx; i<sorted.length; i++){
            if(sorted[i] !== arr[i]) {
                return i;
            }
        }
        return true;
    }
    
    Array.prototype.swap = function (x,y) {
        var b = this[x];
        this[x] = this[y];
        this[y] = b;
        return this;
    }
    
    for(let i=0; i<=k; i++) {
        console.log(compareArr(sorted, arr, i))
        if(compareArr(sorted, arr, i)) {
            return arr
        } else {
            // swap digit
            
            const divideArr = arr.slice(i, arr.length);
            const maxIdx = arr.indexOf(Math.max(...divideArr));
            arr.swap( 0, maxIdx )
            console.log(arr)
        }
    }

}
