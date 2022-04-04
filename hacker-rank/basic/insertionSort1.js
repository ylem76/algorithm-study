/*
삽입정렬 1
문제 풀이 자체는 쉽게 했는데, 어떤 걸 할 지 잘 모르겠다
일반적인 삽입정렬은 앞에서부터 하는데,
이건 뒤에서부터 하네
*/
function insertionSort1(n, arr) {    
	const targetNum = arr[n-1];
	
	for(let i=(n-1); i>=0; i--) {
			if(arr[i-1] > targetNum) {
					arr[i] = arr[i-1];
					console.log(...arr)
			} else {
					arr[i] = targetNum
					console.log(...arr)
					break;
			}    
	}
}