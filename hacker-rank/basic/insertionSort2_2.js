/*
insertionSort1에서 for문으로 짜는 바람에
복잡해져서 더 못 풀었다

어제 찾은 while문으로 해결함
1에서 왜 뒤에서부터 시작하나 했는데, 
키가 되는 타겟은 앞에서부터 시작하되, 앞의(정렬된) 숫자보다 key가 더 작은 경우
while문을 그때 실행해줌

*/
function insertionSort2(n, arr) {
    for (let j = 1; j < arr.length; j++) {
        let key = arr[j];
        let i = j;

        while( i> 0 && arr[i-1] > key) {
            arr[i] = arr[i-1];
            // console.log(...arr);
            i--;
        }
        
        arr[i] = key;
        console.log(...arr);
    }
}