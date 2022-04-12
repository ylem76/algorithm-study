/*
몇 번 자리가 바뀐 건지 체크함
정렬 중요한 건 알겠는데, 재미는 없음
*/
function runningTime(arr) {
	let count = 0;
	
	for (let j = 1; j < arr.length; j++) {
			let key = arr[j];
			let i = j;

			while( i> 0 && arr[i-1] > key) {
					count++;
					arr[i] = arr[i-1];
					i--;
			}
			arr[i] = key;
	}
	
	return count;
}