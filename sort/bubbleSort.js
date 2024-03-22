function bubbleSort(arr) {
	// 버블 정렬은 거의 다 정렬된 상태에서는 비교적 시간복잡도가 매우 낮아지는 정렬법
	// swap이 일어났는지 확인하는 코드를 추가하여 일어나지 않았다면 정렬이 완료된 것으로 간주

	let noSwap;
	// swap helper function
	const swap = (arr, i) => {
		const temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
		return arr;
	};

	// 버블 정렬의 특징 상 루프가 1번 완료 되면 가장 큰 숫자가 제 자리를 찾게 된다.
	// 그렇다면 그 다음 안쪽 루프는 배열 전체를 다 돌 필요 X
	// 따라서 제한할 수 있도록 i값을 배열 길이에서 점점 줄어들도록 수정

	for (let i = arr.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// for루프를 돌면서 다음 숫자와 비교한다
				// 비교했을 때 현재 숫자가 다음 숫자보다 크면 swap
				swap(arr, j);
				noSwap = false;
				console.log(arr);
			}
		}
		if (noSwap) {
			console.log('noSwap!');
			break;
		}
	}

	return arr;
}

console.log(bubbleSort([2, 3, 4, 5, 1]));
