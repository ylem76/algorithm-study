/*
이렇게 지저분하게 풀어도 되는 걸까?
*/

function cutTheSticks(arr) {
    // console.log(arr);
    let array = arr;
    const countArr = [];
    while(array.length > 0) {
        const minNum = Math.min(...array);
        // console.log(minNum);
        const cuttedArr = [];
        let count = 0;
        array.forEach(item => {
            if(item > minNum) {
                cuttedArr.push(item - minNum)
                count ++;
            } else if (item === minNum) {
                count ++;
            }
        });
        
        countArr.push(count);
        console.log(count);
        array = cuttedArr;
        // console.log(array);
    }
    return countArr;
}