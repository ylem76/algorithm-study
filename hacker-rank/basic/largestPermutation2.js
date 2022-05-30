/*
* k값은 8076인데, 루프는 2269만 돈다 왜죠
*/
function largestPermutation(k, arr) {
    // Write your code here
    
    const sorted = arr.slice().sort((a,b) => b-a);
    // console.log(k, arr, sorted);
    
    let thisNum = sorted[0];
    
    Array.prototype.swap = function (x,y) {
        var b = this[x];
        this[x] = this[y];
        this[y] = b;
        return this;
    }
    
    for(let i=0; i<k; i++) {
        console.log(i)
        const maxIdx = arr.indexOf(thisNum);
        const compareIdx = i
        arr = arr.swap( i, maxIdx )
        thisNum --;
        // console.log(arr);
        
        
    }
    return arr;
}