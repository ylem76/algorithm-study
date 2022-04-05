/*
part2가 안풀려서 다시 돌아옴
*/

function insertionSort1(n, arr) {
	const key = arr[n-1];
	
	let i = n-1;
	
	while( i> 0 && arr[i-1] > key) {
			arr[i] = arr[i-1];
			console.log(...arr);
			i--;
	}
	arr[i] = key;
	console.log(...arr)
}