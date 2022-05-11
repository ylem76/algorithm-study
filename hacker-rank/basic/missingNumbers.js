/**
 * 동일한 유형으로 풀려서 금방 풀었다
 * arr 배열을 순회하면서 brr과 겹치는 요소를 splice로 하나 하나 삭제
 * 남은 brr을 중복을 제거하고, 정렬하여 답 도출
 */
function missingNumbers(arr, brr) {
    console.log(arr,brr);
    for(let i=0; i<arr.length; i++) {
        // find arr[i] from brr
        // delete arr[i] from brr
        brr.indexOf(arr[i]);
        brr.splice(brr.indexOf(arr[i]),1)
        
    }
    const result = Array.from(new Set(brr))
    result.sort((a,b)=>a-b)

    return result

}