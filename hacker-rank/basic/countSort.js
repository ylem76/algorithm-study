/**
배열의 앞 절반은 -로 그 뒤는 문자열로 출력
어렵게 생각했는데, 그냥 단순하게 배열 인덱스 앞부분이었다
원래는 문제의 예제처럼 2차원 배열로 만들었는데,
어차피 2번 join할 필요가 없어 보여서 1차원 배열의 문자열로 변경
 */

function countSort(arr) {
    const frequency = [];
    for(let i=0; i<100; i++) {
        frequency.push('');
    }
    // console.log(frequency)
    for(let i=0; i<arr.length; i++){
        const idx = arr[i][0];
        const string = i < arr.length/2 ? '- ' : arr[i][1]+' '
        frequency[idx] += string;
    }
    console.log(frequency.join(''));
}