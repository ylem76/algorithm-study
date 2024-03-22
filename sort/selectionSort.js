function selectionSort(arr) {
	// 안쪽 루프를 돌면서 최솟값을 찾는다
	// 찾은 최솟값을 정렬되지 않은 맨 앞의 숫자와 바꾼다

	// swap helper function
	const swap = (arr, i, j) => {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		return arr;
	};

	for (let i = 0; i < arr.length - 1; i++) {
		// 최솟값 찾기
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIdx] > arr[j]) {
				minIdx = j;
			}
		}

		// minIdx가 변경되었을 때만 swap 실행
		if (i !== minIdx) {
			// 최솟값과 가장 앞에 있는 데이터 서로 변경
			swap(arr, i, minIdx);
			console.log(arr);
		}
	}
	return arr;
}

selectionSort([0, 2, 3, 4, 3, 1]);
